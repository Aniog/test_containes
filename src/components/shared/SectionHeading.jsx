export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.32em] text-velmora-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-4xl leading-none text-velmora-espresso sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-velmora-espresso/72 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
