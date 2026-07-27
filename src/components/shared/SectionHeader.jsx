export default function SectionHeader({ eyebrow, title, description, align = 'left', inverse = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const eyebrowClass = inverse ? 'text-brand-amber' : 'text-brand-blue'
  const titleClass = inverse ? 'text-white' : 'text-brand-ink'
  const descriptionClass = inverse ? 'text-slate-300' : 'text-brand-muted'

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl font-semibold tracking-tight md:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-7 md:text-lg ${descriptionClass}`}>
          {description}
        </p>
      )}
    </div>
  )
}
