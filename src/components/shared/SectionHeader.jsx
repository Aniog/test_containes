export default function SectionHeader({ subtitle, title, description, center = true, light = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {subtitle && (
        <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${light ? 'text-sky-blue-light' : 'text-sky-blue'}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-muted-text'}`}>
          {description}
        </p>
      )}
      <div className={`w-16 h-1 bg-sky-blue rounded-full mt-4 ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}
