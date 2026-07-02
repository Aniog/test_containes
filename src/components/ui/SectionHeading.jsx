const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}) => {
  const alignment =
    align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
  const eyebrowClass = theme === 'dark' ? 'text-amber-300' : 'text-amber-700'
  const titleClass = theme === 'dark' ? 'text-stone-50' : 'text-stone-900'
  const descriptionClass = theme === 'dark' ? 'text-stone-300' : 'text-stone-600'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-medium uppercase tracking-[0.35em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-4xl leading-none md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
