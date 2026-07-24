const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-4xl leading-none text-velmora-ivory sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-velmora-taupe sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
