export default function SectionHeader({ caption, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  return (
    <div className={`${alignClass} mb-12`}>
      {caption && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-3">
          {caption}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-1 w-16 bg-secondary rounded ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  )
}
