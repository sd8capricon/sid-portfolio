interface Props {
    link?: string
    children: React.ReactNode,
    title: String,
    position: String
}

const ResumeItemList: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <ul className="text-gray-300 mt-5 ml-3 list-disc">
            {props.children}
        </ul>
    );
}

const ResumeItem: React.FC<Props> = (props) => {
    return (
        <div className="container px-5 resume-item relative border-l-2 mb-5">
            <a target="_blank" href={props.link}>
                <h4 className='font-bold uppercase text-primary-lighter'>
                    {props.title}
                </h4>
                {/* <span className='font-semibold'>Hons in Data Science</span><br /> */}
            </a>
            <span className='text-gray-300 italic'>{props.position}</span>
            {/* ItemList here */}
            {props.children}
        </div>
    )
}

export { ResumeItemList }
export default ResumeItem
