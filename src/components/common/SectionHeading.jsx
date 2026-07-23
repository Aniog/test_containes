const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl space-y-3 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-amber-700">{eyebrow}</p>
      ) : null}
      <h2 className="font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-stone-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
