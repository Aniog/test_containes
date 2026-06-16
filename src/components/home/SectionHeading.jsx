const SectionHeading = ({
  eyebrow,
  title,
  description,
  titleClassName = 'text-brand-ink',
  descriptionClassName = 'text-brand-slate',
}) => {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-bronze">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold tracking-tight md:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 md:text-lg ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  )
}

export default SectionHeading
