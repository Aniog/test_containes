export default function SectionTitle({ title, subtitle, centered = true, light = false }) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}>
      <h2 className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${light ? 'text-white' : 'text-text-primary'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-text-secondary'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
