const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'
  const width = align === 'center' ? 'max-w-3xl' : 'max-w-2xl'

  return (
    <div className={`${width} ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-brand-ink md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-brand-slate md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
