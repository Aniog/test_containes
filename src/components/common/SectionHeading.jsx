const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? <p className="text-xs uppercase tracking-brand text-bronze">{eyebrow}</p> : null}
      <h2 className="mt-3 font-serif text-4xl leading-none text-ink sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-ink/72 sm:text-base">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
