const SectionHeading = ({ eyebrow, title, description, align = 'left', tone = 'dark' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'
  const titleTone = tone === 'light' ? 'text-velmora-ivory' : 'text-velmora-ink'
  const textTone = tone === 'light' ? 'text-velmora-ivory/80' : 'text-velmora-mocha'
  const eyebrowTone = tone === 'light' ? 'text-xs font-medium uppercase tracking-luxe text-velmora-ivory/70' : 'eyebrow-label'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <span className={eyebrowTone}>{eyebrow}</span> : null}
      <div className="space-y-3">
        <h2 className={`text-4xl leading-tight md:text-5xl ${titleTone}`}>{title}</h2>
        {description ? (
          <p className={`max-w-xl text-base leading-7 md:text-lg ${textTone}`}>
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
