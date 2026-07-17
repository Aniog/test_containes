const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}) => {
  const alignment =
    align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'
  const eyebrowClass =
    theme === 'dark' ? 'text-velmora-champagne' : 'text-velmora-taupe'
  const titleClass =
    theme === 'dark' ? 'text-velmora-ivory' : 'text-velmora-ink'
  const descriptionClass =
    theme === 'dark' ? 'text-velmora-ivory/76' : 'text-velmora-muted'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className={`text-xs font-medium uppercase tracking-[0.35em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 font-display text-4xl font-medium leading-none md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-7 md:text-lg ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
