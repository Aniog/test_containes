const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment =
    align === 'center'
      ? 'mx-auto text-center items-center'
      : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="mt-5 text-sm leading-7 text-velmora-ink/70 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
