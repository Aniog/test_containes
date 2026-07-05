function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  titleId,
  descriptionId,
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const isLight = tone === 'light'
  const eyebrowClass = isLight ? 'text-velmora-gold' : 'text-velmora-gold-deep'
  const titleClass = isLight ? 'text-velmora-cream' : 'text-velmora-ink'
  const descriptionClass = isLight ? 'text-velmora-cream/74' : 'text-velmora-mute'

  return (
    <div className={`max-w-2xl space-y-3 ${alignment}`}>
      {eyebrow ? (
        <p className={`text-xs uppercase tracking-eyebrow ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={`font-display text-4xl leading-none tracking-editorial md:text-5xl ${titleClass}`}
      >
        {title}
      </h2>
      {description ? (
        <p id={descriptionId} className={`text-sm leading-7 md:text-base ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
