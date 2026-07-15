function SectionHeading({ eyebrow, title, description, align = 'left', light = false }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p
          className={`mb-4 text-xs uppercase tracking-[0.38em] ${
            light ? 'text-velmora-cloud' : 'text-velmora-mist'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-4xl leading-none md:text-5xl ${
          light ? 'text-velmora-ivory' : 'text-velmora-ink'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-7 ${light ? 'text-velmora-cloud' : 'text-velmora-mist'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
