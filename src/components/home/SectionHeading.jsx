function SectionHeading({ eyebrow, title, description, dark = false }) {
  const eyebrowClass = dark ? 'text-amber-200' : 'text-amber-600'
  const titleClass = dark ? 'text-white' : 'text-slate-950'
  const descriptionClass = dark ? 'text-slate-300' : 'text-slate-600'

  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl font-semibold leading-tight md:text-5xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-8 ${descriptionClass}`}>{description}</p>
    </div>
  )
}

export default SectionHeading
