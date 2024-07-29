interface Props {
    children: React.ReactNode
}

export default function SectionTitle({ children }: Props) {
    return (
        <h2 className="mb-12 uppercase text-primary-lighter relative text-3xl font-semibold section-title">{children}</h2>
    )
}