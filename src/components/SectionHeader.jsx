export default function SectionHeader({ badge, title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {badge && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
          light ? 'bg-blue-700 text-blue-100' : 'bg-blue-100 text-brand-blue'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${light ? 'text-white' : 'text-brand-dark'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-blue-200' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
