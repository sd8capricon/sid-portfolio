import { ResumeItemInterface } from "../types";

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

const Resume: ResumeInterface = {
    left: [
        {
            sectionTitle: "Education",
            items: [
                {
                    title: "Bachelor Engineering - Computer Engineering",
                    subtitle: "Hons in Data Science",
                    position: "University of Mumbai(2020-24)",
                    highlights: [
                        "Association of Computing Machinery(ACM) - Vice ChairPerson(2022-23), Asst. Technical Head(2021-22)",
                        "Teknack Gaming Studio - Organizer, Developer & Mentor",
                        "Taught and led technical training sessions, talks and workshops on various tools, technologies and softwares for the students of DBIT as well as other colleges.",
                        "Sessions on topics like Web Development, Programming, Git, GitHub, Game Development, Unity, and many more.",
                    ],
                },
            ],
        },
        {
            sectionTitle: "Organizations",
            items: [
                {
                    title: "Association of Computing Machinery(ACM)",
                    position: "Vice Chairperson (2022-23)",
                    highlights: [
                        "Co-ordinate and manage the Core Team and organize events, workshops and trainings for the students.",
                        "Manage and coordinate all the activities of the chapter and responsible for all administrative, functional and Organizational duties in the chapter.",
                    ],
                    relatedPositions: [
                        {
                            position: "Asst. Technical Head (2021-22)",
                            highlights: [
                                "Conducted workshops, taught and trained students on topics like Git, GitHub, Web Development.",
                                "Responsible for maintaining and implementing new features for the offical chapter website.",
                            ],
                        },
                    ],
                },
            ],
        },
        {
            sectionTitle: "Non-Profit",
            items: [
                {
                    title: "Sakhya-Women's Guidance Cell (NGO)",
                    position: "Website Developer (2024)",
                    link: "https://sakhyawgw.org",
                    highlights: [
                        "End-to-end development of the NGO's website, enhancing user experience and engagement.",
                        "Ensured website security by implementing SSL certificates.",
                        "Technologies: Astro, Tailwind CSS, Typescript",
                    ],
                },
                {
                    title: "Anti-Plastic Brigade Charitable Trust (NGO)",
                    position: "Website Developer (2022)",
                    link: "https://anti-plasticbrigade.com",
                    highlights: [
                        "Official Website for Anti-Plastic Brigade Charitable Trust.",
                        "Developed, Designed and Deployed the website for the NGO.",
                        "Technologies: HTML, CSS, Javascript and Bootstrap.",
                    ],
                }
            ],
        },
    ],
    right: [
        {
            sectionTitle: "Work Experience",
            items: [
                {
                    title: "Prorigo Software",
                    position: "Software Engineer II (2025-present)",
                    link: "https://www.prorigo.com/en",
                    highlights: [
                        "Enhanced graph-based RAG with agentic capabilities using LangChain and LangGraph, enabling robust Cypher query generation over knowledge graphs.",
                        "Developed multiple AI agents focused on the PLM domain.",
                        "Owned end-to-end deployments by containerizing the application, deploying to Kubernetes clusters and Azure VMs, and automating CI/CD pipelines."
                    ],
                    relatedPositions: [
                        {
                            position: "Software Engineer Trainee (2024-25)",
                            highlights: [
                                "Built a graph-based RAG system for Aras PLM using Microsoft Semantic Kernel and Neo4j.",
                                "Developed a multimodal ingestion pipeline using LlamaIndex to transform structured and unstructured data into knowledge graphs.",
                                "Developed a FastAPI-based REST API exposing RAG and agent capabilities with secure authentication."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            sectionTitle: "Projects",
            items: [
                {
                    title: "Sacred Hearts School",
                    position: "Website Developer",
                    link: "https://sacredheartschool.in",
                    highlights: [
                        "Official Website for Sacred Heart School.",
                        "Developed, Designed and Deployed the website",
                        "Technologies: Astro, Tailwind CSS, Typescript",
                    ],
                },
                {
                    title: "Architect Yogesh Dhaigude",
                    position: "Website Developer",
                    link: "https://ayda.in",
                    highlights: [
                        "Official Website for Architect Yogesh Dhaigude.",
                        "Developed, Designed and Deployed the website with a content management system.",
                        "Technologies: Astro, Tailwind CSS, Typescript",
                    ],
                },
                {
                    title: "COVID-19 Analysis",
                    position: "Data Analysis",
                    highlights: [
                        "Analysed the trends in the covid cases of Andhra Pradesh State, India.",
                        "Applied regression algorithm on Tested vs Confirmed cases, Confirmed vs Recovered cases, Confirmed vs Deceased cases and Confirmed cases vs Timeperiod.",
                        "Technologies: Python, Numpy, Pandas, Matplotlib, Sk-learn",
                    ],
                },
            ],
        },
    ],
};

export default Resume;
