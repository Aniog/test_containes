const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false,
}) => {
  const alignment =
    align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
  const eyebrowClass = inverse ? 'text-sand' : 'text-taupe'
  const titleClass = inverse ? 'text-pearl' : 'text-obsidian'
  const descriptionClass = inverse ? 'text-sand' : 'text-truffle'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className={`mb-4 text-xs font-medium uppercase tracking-brand ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-4xl leading-none md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-sm leading-7 md:text-base ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
