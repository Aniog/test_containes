export default function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-brand-ink'
  const descColor = light ? 'text-slate-200' : 'text-slate-600'

  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <div className={`label-eyebrow ${light ? '!text-brand-accent' : ''}`}>{eyebrow}</div>
      )}
      <h2 className={`mt-3 text-3xl font-bold tracking-tight md:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  )
}
