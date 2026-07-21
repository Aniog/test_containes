const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  actionLabel,
  actionHref,
}) => {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
  const titleTone = light ? 'text-ivory' : 'text-noir'
  const bodyTone = light ? 'text-ivory/70' : 'text-taupe'

  return (
    <div className={alignment}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`font-display text-4xl leading-tight sm:text-5xl ${titleTone}`}>
        {title}
      </h2>
      {description ? <p className={`mt-4 text-base leading-7 ${bodyTone}`}>{description}</p> : null}
      {actionLabel && actionHref ? (
        <a
          href={actionHref}
          className={`mt-6 inline-flex items-center text-sm uppercase tracking-brand ${
            light ? 'text-gold' : 'text-noir'
          }`}
        >
          {actionLabel}
        </a>
      ) : null}
    </div>
  )
}

export default SectionHeading
