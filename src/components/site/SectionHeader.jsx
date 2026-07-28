const SectionHeader = ({ eyebrow, title, description, align = 'center' }) => {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-brand-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
