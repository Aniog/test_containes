const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.32em] text-amber-300">{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-50 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-stone-300 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
