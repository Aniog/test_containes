export default function SectionHeader({
  eyebrow,
  title,
  body,
  align = 'center',
  inverse = false,
}) {
  const titleColor = inverse ? 'text-velmora-ivory' : 'text-velmora-ink'
  const bodyColor = inverse ? 'text-velmora-sand' : 'text-velmora-taupe'

  return (
    <div
      className={`mx-auto max-w-3xl ${
        align === 'left' ? 'text-left' : 'text-center'
      }`}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-widestLuxury text-velmora-gold">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-4xl font-medium leading-tight md:text-6xl ${titleColor}`}>
        {title}
      </h2>
      {body && (
        <p className={`mt-5 text-base leading-8 md:text-lg ${bodyColor}`}>
          {body}
        </p>
      )}
    </div>
  )
}
