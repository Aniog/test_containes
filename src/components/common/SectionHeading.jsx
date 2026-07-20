const alignmentClassNames = {
  left: 'items-start text-left',
  center: 'items-center text-center',
}

const toneClassNames = {
  default: {
    eyebrow: 'text-velmora-muted',
    title: 'text-velmora-ink',
    description: 'text-velmora-muted',
  },
  inverted: {
    eyebrow: 'text-velmora-gold',
    title: 'text-velmora-cream',
    description: 'text-velmora-cream/76',
  },
}

const SectionHeading = ({ eyebrow, title, description, align = 'left', inverted = false }) => {
  const tone = inverted ? toneClassNames.inverted : toneClassNames.default

  return (
    <div className={`flex flex-col gap-4 ${alignmentClassNames[align] || alignmentClassNames.left}`}>
      {eyebrow ? <p className={`eyebrow ${tone.eyebrow}`}>{eyebrow}</p> : null}
      <div className="space-y-4">
        <h2 className={`font-display text-4xl sm:text-5xl ${tone.title}`}>{title}</h2>
        {description ? (
          <p className={`max-w-2xl text-sm leading-7 sm:text-base ${tone.description}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
