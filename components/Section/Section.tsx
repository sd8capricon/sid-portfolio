import { ComponentProps, FC, RefObject } from 'react';

interface Props extends ComponentProps<'section'> {
    innerRef?: RefObject<HTMLElement>
}

const Section: FC<Props> = (props) => {
    return (
        <section ref={props.innerRef} className={props.className + ' overflow-x-clip scroll-mt-12 container mx-auto px-4 md:px-8 lg:px-16 xl:px-36 py-6 xl:py-12 ' + props.id} id={props.id}>
            {props.children}
        </section>
    );
}

export default Section;