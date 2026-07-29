export default function SectionHeader({ eyebrow, title, description, centered = false, id, inverted = false }) {
  const alignment = centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  const titleColor = inverted ? 'text-white' : 'text-sourcing-navy'
  const descriptionColor = inverted ? 'text-sourcing-mist' : 'text-sourcing-muted'

  return (
    <div className={alignment}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wide text-sourcing-blue">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`mt-4 text-lg leading-8 ${descriptionColor}`}>{description}</p>}
    </div>
  )
}
