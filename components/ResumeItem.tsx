import { ResumeItemInterface } from "../types"
import { ResumeSection } from "../utils/resume"

interface ResumeItemProps extends ResumeItemInterface {
    children: React.ReactNode,
}

const ResumeSectionTitle: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <h3 className="text-2xl font-bold inline-block mb-5">
            {props.children}
        </h3>
    );
}

const ResumeItemList: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <ul className="text-gray-300 mt-5 mb-5 ml-3 list-disc">
            {props.children}
        </ul>
    );
}

const ResumeItem: React.FC<ResumeItemProps> = (props) => {
    return (
        <div className="container px-5 resume-item relative border-l-2 mb-5">
            <a target="_blank" href={props.link}>
                <h4 className='font-bold uppercase text-primary-lighter'>
                    {props.title}
                    <div className="font-normal">{props.subtitle}</div>
                </h4>
            </a>
            <span className='text-gray-300 italic'>{props.position}</span>
            {/* ItemList here */}
            {props.children}
        </div>
    )
}

const RenderResumeColumn: React.FC<{ sections: ResumeSection[] }> = (props) => {
    return (
        <div className="container">
            {props.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <ResumeSectionTitle>{section.sectionTitle}</ResumeSectionTitle>
                    {section.items.map((item, index) => (
                        <ResumeItem key={index} {...item}>
                            <ResumeItemList>
                                {item.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ResumeItemList>
                            {item.relatedPositions?.map((related, rIndex) => (
                                <div key={rIndex}>
                                    {related.position && (
                                        <span className="text-gray-300 italic">
                                            {related.position}
                                        </span>
                                    )}
                                    <ResumeItemList>
                                        {related.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ResumeItemList>
                                </div>
                            ))}
                        </ResumeItem>
                    ))}
                </div>
            ))}
        </div>
    )
}

export { RenderResumeColumn }
