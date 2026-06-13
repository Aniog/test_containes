export default function SectionHeader({ badge, title, description, align = 'center', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <span className="inline-block bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
