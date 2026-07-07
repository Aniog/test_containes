const SectionIntro = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment =
    align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-gold-soft">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl text-ivory sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-mist sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionIntro
