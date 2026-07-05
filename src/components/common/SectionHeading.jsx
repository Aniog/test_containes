export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl space-y-3 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-velmora-mist">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-none text-velmora-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-7 text-velmora-mist md:text-base">{description}</p>
      ) : null}
    </div>
  )
}
