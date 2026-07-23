export default function SectionHeading({ eyebrow, title, description, align = 'left', id }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl space-y-4 ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-stone-500">{eyebrow}</p>
      <h2 id={id} className="text-4xl leading-none text-[var(--velmora-ink)] md:text-5xl">
        {title}
      </h2>
      <p className="text-sm leading-7 text-stone-600 md:text-base">{description}</p>
    </div>
  )
}
