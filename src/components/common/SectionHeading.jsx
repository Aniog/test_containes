const SectionHeading = ({ eyebrow, title, titleId, description, descriptionId, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start'

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold">
          {eyebrow}
        </span>
      ) : null}
      <h2 id={titleId} className="font-serif text-4xl leading-none text-velmora-ink md:text-5xl">
        {title}
      </h2>
      <p id={descriptionId} className="max-w-xl text-sm leading-7 text-velmora-stone md:text-base">
        {description}
      </p>
    </div>
  )
}

export default SectionHeading
