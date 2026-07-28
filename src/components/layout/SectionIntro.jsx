const SectionIntro = ({ eyebrow, title, description, align = 'left', tone = 'light' }) => {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  const eyebrowClass = tone === 'dark' ? 'text-brand-gold' : 'text-brand-blue'
  const titleClass = tone === 'dark' ? 'text-white' : 'text-brand-navy'
  const descriptionClass = tone === 'dark' ? 'text-slate-200' : 'text-slate-600'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.24em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${titleClass}`}>{title}</h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${descriptionClass}`}>{description}</p>
      ) : null}
    </div>
  )
}

export default SectionIntro
