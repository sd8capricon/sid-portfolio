#!/usr/bin/env node

/**
 * Script to fetch resume JSON from Google Drive before building
 * Runs before next build to:
 * 1. Fetch latest resume from Google Drive
 * 2. Generate utils/resume.ts with the fetched data
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Path where resume will be saved
const RESUME_OUTPUT_PATH = path.join(__dirname, '../utils/resume.ts');
const FALLBACK_PATH = path.join(__dirname, '../public/resume-fallback.json');

// Get Google Drive file ID from environment variable
const GOOGLE_DRIVE_FILE_ID = process.env.RESUME_GOOGLE_DRIVE_ID;

// Construct exportable URL if file ID is provided
let RESUME_URL = process.env.RESUME_URL;
if (GOOGLE_DRIVE_FILE_ID && !RESUME_URL) {
  RESUME_URL = `https://drive.google.com/uc?id=${GOOGLE_DRIVE_FILE_ID}&export=download`;
}

function generateResumeTS(resumeData) {
  const resumeJSON = JSON.stringify(resumeData, null, 4);

  return `import { ResumeItemInterface } from "../types";

interface RelatedPosition {
    position?: string;
    highlights: string[];
}

interface ResumeEntry extends ResumeItemInterface {
    highlights: string[];
    relatedPositions?: RelatedPosition[];
}

export interface ResumeSection {
    sectionTitle: string;
    items: ResumeEntry[];
}

interface ResumeInterface {
    left: ResumeSection[];
    right: ResumeSection[];
}

// Resume data - automatically generated from fetch-resume.js
const Resume: ResumeInterface = ${resumeJSON};

export default Resume;
`;
}

async function fetchResumeFromGoogle() {
  if (!RESUME_URL) {
    console.log('⚠️  No RESUME_URL or RESUME_GOOGLE_DRIVE_ID provided. Using fallback resume.');
    useFallbackResume();
    return;
  }

  console.log('📥 Fetching resume from Google Drive...');

  return new Promise((resolve) => {
    https
      .get(RESUME_URL, (response) => {
        let data = '';

        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          try {
            // Validate it's valid JSON
            const resumeJSON = JSON.parse(data);

            // Ensure it has the required structure
            if (resumeJSON.left && resumeJSON.right) {
              const tsContent = generateResumeTS(resumeJSON);
              fs.writeFileSync(RESUME_OUTPUT_PATH, tsContent);
              console.log('✅ Resume fetched and generated successfully from Google Drive');
              resolve();
            } else {
              console.log('❌ Invalid resume structure. Using fallback.');
              useFallbackResume();
              resolve();
            }
          } catch (error) {
            console.log('❌ Failed to parse resume JSON. Using fallback.');
            console.log('Error:', error.message);
            useFallbackResume();
            resolve();
          }
        });
      })
      .on('error', (error) => {
        console.log('❌ Failed to fetch resume from Google Drive:', error.message);
        console.log('Using fallback resume.');
        useFallbackResume();
        resolve();
      });
  });
}

function useFallbackResume() {
  if (fs.existsSync(FALLBACK_PATH)) {
    const fallbackData = fs.readFileSync(FALLBACK_PATH, 'utf-8');
    const resumeJSON = JSON.parse(fallbackData);
    const tsContent = generateResumeTS(resumeJSON);
    fs.writeFileSync(RESUME_OUTPUT_PATH, tsContent);
    console.log('📄 Using fallback resume');
  } else {
    console.log('⚠️  Fallback resume not found. Resume will be missing.');
  }
}

// Run the fetch
fetchResumeFromGoogle().catch(console.error);
