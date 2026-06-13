const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}) => {
  const alignment =
    align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  const eyebrowClass =
    theme === 'dark' ? 'text-sky-300' : 'text-sky-700'
  const titleClass = theme === 'dark' ? 'text-white' : 'text-slate-900'
  const descriptionClass =
    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${titleClass}`}>
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

export default SectionHeader
