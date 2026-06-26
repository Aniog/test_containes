export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto'
  return (
    <div className={`max-w-3xl ${alignClass} mb-12 md:mb-16`}>
      {eyebrow && (
        <p className="text-sm font-semibold tracking-wide uppercase text-brand-700 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
