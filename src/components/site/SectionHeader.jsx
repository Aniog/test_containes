const SectionHeader = ({ eyebrow, title, description, light = false }) => {
  const eyebrowClass = light ? 'text-amber-200' : 'text-amber-600'
  const titleClass = light ? 'text-white' : 'text-slate-950'
  const descriptionClass = light ? 'text-slate-300' : 'text-slate-600'

  return (
    <div className="max-w-3xl space-y-4">
      <p className={`text-sm font-semibold uppercase tracking-[0.24em] ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold tracking-tight md:text-4xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`text-base leading-7 md:text-lg ${descriptionClass}`}>
        {description}
      </p>
    </div>
  )
}

export default SectionHeader
