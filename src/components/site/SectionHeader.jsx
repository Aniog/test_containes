function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
}) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  const eyebrowClass =
    theme === 'dark'
      ? 'text-sm font-medium uppercase tracking-[0.16em] text-sky-300'
      : 'text-sm font-medium uppercase tracking-[0.16em] text-sky-700'
  const titleClass =
    theme === 'dark'
      ? 'mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl'
      : 'mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl'
  const descriptionClass =
    theme === 'dark'
      ? 'mt-4 text-base leading-7 text-slate-300 md:text-lg'
      : 'mt-4 text-base leading-7 text-slate-600 md:text-lg'

  return (
    <div className={alignment}>
      {eyebrow ? <p className={eyebrowClass}>{eyebrow}</p> : null}
      <h2 className={titleClass}>{title}</h2>
      {description ? <p className={descriptionClass}>{description}</p> : null}
    </div>
  )
}

export default SectionHeader
