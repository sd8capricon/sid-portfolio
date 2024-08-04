import { title } from "process"
import { ResumeItemInterface } from "../types"

interface ServerResumeItem extends ResumeItemInterface {
    list: string[]
}

interface ResumeInterface {
    left: ServerResumeItem[]
    right: ServerResumeItem[]
}

const Resume: ResumeInterface = {
    left: [
        {
            title: "Bachelor Engineering - Computer Engineering",
            subtitle: "",
            position: "",
            list: [
                "Association of Computing Machinery(ACM) - Vice ChairPerson(2022-23), Asst. Technical Head(2021-22)",
                "Teknack Gaming Studio - Organizer, Developer & Mentor",
                "Taught and led technical training sessions, talks and workshops on various tools, technologies and softwares for the students of DBIT as well as other colleges.",
                "Sessions on topics like Web Development, Programming, Git, GitHub, Game Development, Unity, and many more."
            ]
        }
    ],
    right: []
}

export default Resume