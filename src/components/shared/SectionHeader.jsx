const SectionHeader = ({ eyebrow, title, description, align = 'left', inverted = false }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const eyebrowColor = inverted ? 'text-amber-300' : 'text-blue-700'
  const titleColor = inverted ? 'text-white' : 'text-slate-950'
  const descriptionColor = inverted ? 'text-slate-200' : 'text-slate-600'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-semibold tracking-tight ${titleColor} md:text-5xl`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-base leading-7 ${descriptionColor} md:text-lg`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
