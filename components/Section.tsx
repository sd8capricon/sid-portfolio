import { ComponentProps, FC, RefObject } from 'react';

interface SectionProps extends ComponentProps<'section'> {
    innerRef?: RefObject<HTMLElement>
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mb-12 uppercase text-primary-lighter relative text-3xl font-semibold section-title">
            {children}
        </h2>
    )
}

export default function Section(props: SectionProps) {
    return (
        <section ref={props.innerRef} className={props.className + ' overflow-x-clip scroll-mt-12 container mx-auto px-4 md:px-8 lg:px-16 xl:px-36 py-6 xl:py-12 ' + props.id} id={props.id}>
            {props.children}
        </section>
    );
}