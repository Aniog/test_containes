const SectionHeading = ({ eyebrow, title, description, align = 'left', light = false }) => {
  const headingTone = light ? 'text-ivory' : 'text-espresso'
  const bodyTone = light ? 'text-ivory/74' : 'text-ink-soft'

  return (
    <div className={`space-y-3 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-4xl leading-tight md:text-5xl ${headingTone}`}>{title}</h2>
      {description ? <p className={`text-sm leading-7 md:text-base ${bodyTone}`}>{description}</p> : null}
    </div>
  )
}

export default SectionHeading
