export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', tone = 'light' }) {
  const titleColor = tone === 'dark' ? 'text-velmora-ivory' : 'text-velmora-ink'
  const subtitleColor = tone === 'dark' ? 'text-velmora-sand' : 'text-velmora-taupe'

  return (
    <div className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">{eyebrow}</p>}
      <h2 className={`font-serif text-4xl leading-tight md:text-6xl ${titleColor}`}>{title}</h2>
      {subtitle && <p className={`mt-5 text-base leading-8 md:text-lg ${subtitleColor}`}>{subtitle}</p>}
    </div>
  )
}
