export default function SectionHeading({ eyebrow, title, copy, align = 'center', inverted = false }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  const titleColor = inverted ? 'text-velmora-ivory' : 'text-velmora-ink'
  const copyColor = inverted ? 'text-velmora-champagne' : 'text-velmora-taupe'

  return (
    <div className={`flex flex-col ${alignment} gap-3`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-velmora-gold">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-serif text-4xl font-medium leading-tight ${titleColor} md:text-6xl`}>
        {title}
      </h2>
      {copy && <p className={`max-w-2xl text-sm leading-7 ${copyColor} md:text-base`}>{copy}</p>}
    </div>
  )
}
