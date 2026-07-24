const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignmentClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignmentClass}`}>
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-[0.32em] text-velmora-mist">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl leading-none text-velmora-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-sm leading-7 text-velmora-mist sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
