function SectionHeader({ eyebrow, title, description, align = 'left', id }) {
  const alignClasses = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'

  return (
    <div className={alignClasses}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-editorial text-truffle">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="font-display text-4xl text-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-truffle sm:text-base">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader
