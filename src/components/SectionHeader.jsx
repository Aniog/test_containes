export default function SectionHeader({ label, title, subtitle, align = 'center', light = false }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-10 md:mb-14`}>
      {label && (
        <span className="inline-flex items-center rounded-full bg-brand-light text-brand px-3 py-1 text-sm font-semibold mb-4">
          {label}
        </span>
      )}
      <h2 className={`section-title ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${light ? 'text-slate-300' : 'text-slate-600'}`}>{subtitle}</p>
      )}
    </div>
  )
}
