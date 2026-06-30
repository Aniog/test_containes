const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-medium uppercase tracking-[0.35em] text-brand-muted">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-4xl leading-none text-brand-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-brand-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
