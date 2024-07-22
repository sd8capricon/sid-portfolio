interface Props {
    link?: string
    children: React.ReactNode,
    org: String,
    title: String
}

const Project: React.FC<Props> = (props) => {
    return (
        <div className="container px-5 resume-item relative border-l-2 mb-5">
            <a target="_blank" href={props.link}>
                <h4 className='font-bold uppercase text-primary-lighter'>{props.org}</h4>
            </a>
            <span className='text-gray-300 italic'>{props.title}</span>
            <ul className='text-gray-300 mt-5 ml-3 list-disc'>
                {props.children}
            </ul>
        </div>
    )
}

export default Project

{/* <li>Official Website for Anti-Plastic Brigade Charitable Trust.</li>
                <li>Developed, Designed and Deployed the website for the NGO.</li>
                <li>Technologies: HTML, CSS, Javascript and Bootstrap.</li> */}
