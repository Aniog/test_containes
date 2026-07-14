const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.35em] text-velmora-taupe">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-display text-4xl leading-tight text-velmora-ink md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-velmora-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
