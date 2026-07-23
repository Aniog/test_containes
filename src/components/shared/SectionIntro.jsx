function SectionIntro({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-luxe text-velmora-champagne">
        {eyebrow}
      </p>
      <h2 className="text-4xl text-velmora-ink md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-velmora-aubergine/85 md:text-lg">
        {description}
      </p>
    </div>
  )
}

export default SectionIntro
