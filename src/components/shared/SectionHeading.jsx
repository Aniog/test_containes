function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  const titleColor = light ? 'text-white' : 'text-slate-950'
  const bodyColor = light ? 'text-slate-300' : 'text-slate-600'
  const eyebrowColor = light ? 'text-emerald-300' : 'text-emerald-700'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className={`text-sm font-medium uppercase tracking-[0.18em] ${eyebrowColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 text-3xl font-semibold tracking-tight md:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description ? <p className={`mt-4 text-base leading-7 md:text-lg ${bodyColor}`}>{description}</p> : null}
    </div>
  )
}

export default SectionHeading
