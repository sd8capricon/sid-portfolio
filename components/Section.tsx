import { FC } from 'react';

interface SectionProps {
    children: React.ReactNode;
    id: string;
    className?: string;
    sectionRef?: React.MutableRefObject<HTMLElement | null>;
}

const Section: FC<SectionProps> = (props) => {
    return (
        <section ref={props.sectionRef} className={props.className + ' scroll-mt-12 container mx-auto px-4 md:px-8 lg:px-16 xl:px-36 py-6 xl:py-12 ' + props.id} id={props.id}>
            {props.children}
        </section>
    );
}

export default Section;