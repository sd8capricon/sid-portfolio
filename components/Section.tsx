import { FC } from 'react';

interface SectionProps {
    children: React.ReactNode;
    id: string;
    className?: string;
    sectionRef?: React.MutableRefObject<HTMLElement|null>;
}

const Section: FC<SectionProps> = (props) => {
    return (
        <section ref={props.sectionRef} className={props.className + ' container mx-auto px-5 md:px-10 lg:px-20 xl:px-40 py-6 xl:py-12 ' + props.id} id={props.id}>
            {props.children}
        </section>
    );
}

export default Section;