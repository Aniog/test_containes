export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl space-y-4 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.36em] text-velmora-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-none text-velmora-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-velmora-taupe sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
