const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl space-y-4 ${alignment}`}>
      <p className="text-xs uppercase tracking-[0.38em] text-[var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="font-serif-display text-4xl leading-none text-[var(--color-text-primary)] md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-7 text-[var(--color-text-secondary)] md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
