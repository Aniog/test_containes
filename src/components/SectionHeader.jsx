export default function SectionHeader({ eyebrow, title, description, centered = false, inverse = false }) {
  const eyebrowClass = inverse ? 'text-blue-200' : 'text-blue-700'
  const titleClass = inverse ? 'text-white' : 'text-slate-950'
  const descriptionClass = inverse ? 'text-slate-200' : 'text-slate-600'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${eyebrowClass}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${titleClass}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-7 md:text-lg ${descriptionClass}`}>{description}</p>}
    </div>
  )
}
