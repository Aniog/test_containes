const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-velmora-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-none text-velmora-ink sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-velmora-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
