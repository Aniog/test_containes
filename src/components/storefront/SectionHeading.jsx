export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl leading-none text-velmora-espresso sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-7 text-velmora-taupe sm:text-base">{description}</p>
      ) : null}
    </div>
  )
}
