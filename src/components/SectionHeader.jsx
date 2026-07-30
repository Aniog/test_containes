export default function SectionHeader({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${light ? 'bg-white/10 text-white' : 'bg-brand-50 text-brand-700'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-neutral-800'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-neutral-300' : 'text-neutral-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
