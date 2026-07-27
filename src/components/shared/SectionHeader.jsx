export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleColor = light ? 'text-white' : 'text-brand-800'
  const subtitleColor = light ? 'text-steel-300' : 'text-steel-600'

  return (
    <div className={`max-w-3xl ${alignClass} mb-12 md:mb-16`}>
      {tag && (
        <span className={`label-tag mb-4 inline-block ${light ? 'bg-white/10 text-accent-300' : ''}`}>
          {tag}
        </span>
      )}
      <h2 className={`heading-section ${titleColor} mb-4`}>{title}</h2>
      {subtitle && (
        <p className={`text-body text-base md:text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
