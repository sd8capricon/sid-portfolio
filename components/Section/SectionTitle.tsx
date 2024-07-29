interface Props {
    children: React.ReactNode
}

/*
.section-title {
  margin-bottom: 3rem;
  text-transform: uppercase;
  color: var(--primary-color-lighter);
  position: relative;
  @apply text-3xl font-semibold;
}
*/

export default function SectionTitle({ children }: Props) {
    return (
        <h2 className="mb-12 uppercase text-primary-lighter relative text-3xl font-semibold section-title">{children}</h2>
    )
}