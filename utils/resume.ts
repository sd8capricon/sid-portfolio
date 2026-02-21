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

// Resume data - automatically generated from fetch-resume.js
const Resume: ResumeInterface = {
    "left": [
        {
            "sectionTitle": "Education",
            "items": [
                {
                    "title": "Bachelor Engineering - Computer Engineering",
                    "subtitle": "Hons in Data Science",
                    "position": "University of Mumbai(2020-24)",
                    "highlights": [
                        "Association of Computing Machinery(ACM) - Vice ChairPerson(2022-23), Asst. Technical Head(2021-22)",
                        "Teknack Gaming Studio - Organizer, Developer & Mentor",
                        "Taught and led technical training sessions, talks and workshops on various tools, technologies and softwares for the students of DBIT as well as other colleges.",
                        "Sessions on topics like Web Development, Programming, Git, GitHub, Game Development, Unity, and many more."
                    ]
                }
            ]
        },
        {
            "sectionTitle": "Organizations",
            "items": [
                {
                    "title": "Association of Computing Machinery(ACM)",
                    "position": "Vice Chairperson (2022-23)",
                    "highlights": [
                        "Co-ordinate and manage the Core Team and organize events, workshops and trainings for the students.",
                        "Manage and coordinate all the activities of the chapter and responsible for all administrative, functional and Organizational duties in the chapter."
                    ],
                    "relatedPositions": [
                        {
                            "position": "Asst. Technical Head (2021-22)",
                            "highlights": [
                                "Conducted workshops, taught and trained students on topics like Git, GitHub, Web Development.",
                                "Responsible for maintaining and implementing new features for the offical chapter website."
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "sectionTitle": "Non-Profit",
            "items": [
                {
                    "title": "Sakhya-Women's Guidance Cell (NGO)",
                    "position": "Website Developer (2024)",
                    "link": "https://sakhyawgw.org",
                    "highlights": [
                        "End-to-end development of the NGO's website, enhancing user experience and engagement.",
                        "Technologies: Astro, Tailwind CSS, Typescript"
                    ]
                },
                {
                    "title": "Girls4Impact (NGO)",
                    "position": "Volunteer (2021)",
                    "link": "",
                    "highlights": [
                        "Taught a 10-week Python course to school students to promote women in tech.",
                        "Taught computer science fundamentals including binary systems, logic gates, and Python programming fundamentals."
                    ]
                },
                {
                    "title": "Anti-Plastic Brigade Charitable Trust (NGO)",
                    "position": "Website Developer (2021)",
                    "link": "https://anti-plasticbrigade.com",
                    "highlights": [
                        "Official Website for Anti-Plastic Brigade Charitable Trust.",
                        "Developed, Designed and Deployed the website for the NGO.",
                        "Technologies: HTML, CSS, Javascript and Bootstrap."
                    ]
                }
            ]
        }
    ],
    "right": [
        {
            "sectionTitle": "Work Experience",
            "items": [
                {
                    "title": "Prorigo Software",
                    "position": "Software Engineer II (2025-present)",
                    "link": "https://www.prorigo.com/en",
                    "highlights": [
                        "Enhanced graph-based RAG with agentic capabilities using LangChain and LangGraph, enabling robust Cypher query generation over knowledge graphs.",
                        "Developed multiple AI agents focused on the PLM domain.",
                        "Owned end-to-end deployments by containerizing the application, deploying to Kubernetes clusters and Azure VMs, and automating CI/CD pipelines."
                    ],
                    "relatedPositions": [
                        {
                            "position": "Software Engineer Trainee (2024-25)",
                            "highlights": [
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
            "sectionTitle": "Publications",
            "items": [
                {
                    "title": "Smart Posture Analyzer For Exercise",
                    "link": "https://ieeexplore.ieee.org/document/10455069",
                    "position": "Conference Paper (2023)",
                    "highlights": [
                        "S. Dhaigude, H. Panigrahi, S. Godse and P. Shaikh, \"Smart Posture Analyzer For Exercise,\" 2023 6th International Conference on Advances in Science and Technology(ICAST), Mumbai, India, 2023, pp. 389 - 394, DOI: 10.1109 / ICAST59062.2023.10455069"
                    ]
                }
            ]
        },
        {
            "sectionTitle": "Accomplishments",
            "items": [
                {
                    "title": "Finalist - Smart India Hackathon 2023",
                    "link": "",
                    "position": "Ministry of Education, Government of India",
                    "highlights": [
                        "Our team designed a language translation tool that converts English to Hindi, aimed at improving digital accessibility.",
                        "The project was selected for presentation by the Ministry of Power, it was intended for use across government organization websites."
                    ]
                }
            ]
        },
        {
            "sectionTitle": "Certifications",
            "items": [
                {
                    "title": "Machine Learning Specialization",
                    "link": "https://coursera.org/share/4b94127d7126eee2e3ce0c95ff0b27b7",
                    "position": "DeepLearning.AI",
                    "highlights": [
                        "Supervised Machine Learning: Regression and Classification",
                        "Advanced Learning Algorithms: Neural Network Training, Decision Trees",
                        "Unsupervised Learning, Recommenders, Reinforcement Learning"
                    ]
                }
            ]
        }
    ]
};

export default Resume;
