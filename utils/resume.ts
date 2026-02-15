import { ResumeItemInterface } from "../types"

interface ServerResumeItem extends ResumeItemInterface {
    list: string[];
    additional_lists?: {
        position?: string;
        list: string[]
    }[]
}

interface ResumeInterface {
    left: ServerResumeItem[]
    right: ServerResumeItem[]
}

const Resume: ResumeInterface = {
    left: [
        {
            title: "Bachelor Engineering - Computer Engineering",
            subtitle: "Hons in Data Science",
            position: "University of Mumbai(2020-24)",
            list: [
                "Association of Computing Machinery(ACM) - Vice ChairPerson(2022-23), Asst. Technical Head(2021-22)",
                "Teknack Gaming Studio - Organizer, Developer & Mentor",
                "Taught and led technical training sessions, talks and workshops on various tools, technologies and softwares for the students of DBIT as well as other colleges.",
                "Sessions on topics like Web Development, Programming, Git, GitHub, Game Development, Unity, and many more."
            ]
        },
        {
            title: "Association of Computing Machinery(ACM)",
            position: "Vice Chairperson (2022-23)",
            list: [
                "Co-ordinate and manage the Core Team and organize events, workshops and trainings for the students.",
                "Manage and coordinate all the activities of the chapter and responsible for all administrative, functional and Organizational duties in the chapter."
            ],
            additional_lists: [
                {
                    position: "Asst. Technical Head (2021-22)",
                    list: [
                        "Conducted workshops, taught and trained students on topics like Git, GitHub, Web Development.",
                        "Responsible for maintaining and implementing new features for the offical chapter website."
                    ]
                }
            ]
        }
    ],
    right: [
        {
            title: "Sacred Hearts School",
            position: "Website Developer",
            link: "https://sacredheartschool.in",
            list: [
                "Official Website for Sacred Heart School.",
                "Developed, Designed and Deployed the website",
                "Technologies: Astro, Tailwind CSS, Typescript"
            ]
        },
        {
            title: "Architect Yogesh Dhaigude",
            position: "Website Developer",
            link: "https://ayda.in",
            list: [
                "Official Website for Architect Yogesh Dhaigude.",
                "Developed, Designed and Deployed the website with a content management system.",
                "Technologies: Astro, Tailwind CSS, Typescript"
            ]
        },
        {
            title: "AKHYA-WOMEN'S GUIDANCE CELL (NGO)",
            position: "Website Developer",
            link: "https://sakhyawgw.org",
            list: [
                "End-to-end development of the NGO's website, enhancing user experience and engagement.",
                "Ensured website security by implementing SSL certificates.",
                "Technologies: Astro, Tailwind CSS, Typescript"
            ]
        },
        {
            title: "Anti-Plastic Brigade Charitable Trust (NGO)",
            position: "Website Developer",
            link: "https://anti-plasticbrigade.com",
            list: [
                "Official Website for Anti-Plastic Brigade Charitable Trust.",
                "Developed, Designed and Deployed the website for the NGO.",
                "Technologies: HTML, CSS, Javascript and Bootstrap."
            ]
        },
        {
            title: "COVID-19 Analysis",
            position: "Data Analysis",
            list: [
                "Analysed the trends in the covid cases of Andhra Pradesh State, India.",
                "Applied regression algorithm on Tested vs Confirmed cases, Confirmed vs Recovered cases, Confirmed vs Deceased cases and Confirmed cases vs Timeperiod.",
                "Technologies: Python, Numpy, Pandas, Matplotlib, Sk-learn"
            ]
        }
    ]
}

export default Resume