export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`.trim()}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-velmora text-velmora-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-display text-3xl text-velmora-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-velmora-muted sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
