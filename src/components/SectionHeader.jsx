export default function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-10 md:mb-14 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <p className="text-xs uppercase tracking-widest text-warm-gray mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
        {title}
      </h2>
    </div>
  )
}
