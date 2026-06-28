const SectionIntro = ({ eyebrow, title, description, align = 'left' }) => {
  const alignmentClass = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <div className={alignmentClass}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-site-ink md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-site-muted md:text-lg">
        {description}
      </p>
    </div>
  )
}

export default SectionIntro
