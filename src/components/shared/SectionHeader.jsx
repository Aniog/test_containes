export default function SectionHeader({ label, title, subtitle, center = false }) {
  return (
    <div className={`mb-10 md:mb-14 ${center ? 'text-center' : ''}`}>
      {label && (
        <p className="text-accent-400 font-semibold text-sm uppercase tracking-wide mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy-600 tracking-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
