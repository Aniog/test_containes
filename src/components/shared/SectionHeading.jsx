export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
}) {
  const eyebrowClassName =
    tone === 'light' ? 'text-velmora-gold' : 'text-velmora-muted'
  const titleClassName =
    tone === 'light' ? 'text-velmora-ivory' : 'text-velmora-cocoa'
  const descriptionClassName =
    tone === 'light' ? 'text-velmora-ivory/80' : 'text-velmora-stone'

  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className={`text-xs uppercase tracking-[0.32em] ${eyebrowClassName}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-4 font-display text-4xl leading-none sm:text-5xl ${titleClassName}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 sm:text-lg ${descriptionClassName}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
