const SectionHeading = ({
  eyebrow,
  title,
  description,
  titleId,
  descriptionId,
  align = 'left',
}) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p
          id={descriptionId}
          className="mt-4 text-base leading-7 text-slate-600 md:text-lg"
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
