const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start'

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-[0.32em] text-bronze">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-display text-4xl leading-none text-ink md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-sm leading-7 text-muted md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default SectionHeading
