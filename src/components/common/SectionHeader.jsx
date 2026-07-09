const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}) => {
  const alignmentClassName =
    align === 'center'
      ? 'mx-auto max-w-2xl text-center'
      : 'max-w-2xl text-left'
  const eyebrowClassName = light ? 'text-amber-300' : 'text-amber-600'
  const titleClassName = light ? 'text-stone-50' : 'text-stone-950'
  const descriptionClassName = light ? 'text-stone-300' : 'text-stone-600'

  return (
    <div className={alignmentClassName}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-medium uppercase tracking-[0.3em] ${eyebrowClassName}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-4xl leading-tight sm:text-5xl ${titleClassName}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 sm:text-lg ${descriptionClassName}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
