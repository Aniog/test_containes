const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}) => {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-3xl text-center'
      : 'max-w-3xl text-left'

  const eyebrowClassName =
    tone === 'dark'
      ? 'text-sm font-semibold uppercase tracking-widest text-amber-300'
      : 'text-sm font-semibold uppercase tracking-widest text-amber-700'

  const titleClassName =
    tone === 'dark'
      ? 'mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl'
      : 'mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl'

  const descriptionClassName =
    tone === 'dark'
      ? 'mt-4 text-base leading-7 text-slate-300 md:text-lg'
      : 'mt-4 text-base leading-7 text-slate-600 md:text-lg'

  return (
    <div className={alignment}>
      {eyebrow ? <p className={eyebrowClassName}>{eyebrow}</p> : null}
      <h2 className={titleClassName}>{title}</h2>
      {description ? <p className={descriptionClassName}>{description}</p> : null}
    </div>
  )
}

export default SectionHeading
