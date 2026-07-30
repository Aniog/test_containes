export default function SectionHeader({ label, title, subtitle, light = false }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
      {label && (
        <span className="inline-block text-sm font-semibold text-brand-accent uppercase tracking-wider mb-3">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          light ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
