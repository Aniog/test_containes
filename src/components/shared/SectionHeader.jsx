const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-amber-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-none text-neutral-950 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
