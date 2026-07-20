const alignmentClassNames = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

const SectionHeading = ({ eyebrow, title, description, align = 'left', inverted = false }) => {
  const eyebrowClassName = inverted ? 'text-velmora-gold' : 'text-velmora-muted'
  const titleClassName = inverted ? 'text-velmora-cream' : 'text-velmora-ink'
  const descriptionClassName = inverted ? 'text-velmora-cream/76' : 'text-velmora-muted'

  return (
    <div className={`flex flex-col gap-4 ${alignmentClassNames[align] || alignmentClassNames.left}`}>
      {eyebrow ? <p className={`eyebrow ${eyebrowClassName}`}>{eyebrow}</p> : null}
      <div className="space-y-4">
        <h2 className={`font-display text-4xl sm:text-5xl ${titleClassName}`}>{title}</h2>
        {description ? (
          <p className={`max-w-2xl text-sm leading-7 sm:text-base ${descriptionClassName}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
