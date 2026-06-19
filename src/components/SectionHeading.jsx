const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-bronze">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-4xl leading-none text-brand-espresso md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-brand-mink md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
