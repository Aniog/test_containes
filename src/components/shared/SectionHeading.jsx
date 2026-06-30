export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-velmora-bronze">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-4xl leading-none text-velmora-espresso md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-ink/72 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
