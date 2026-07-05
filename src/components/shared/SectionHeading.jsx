function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignmentClasses =
    align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <div className={alignmentClasses}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-overline text-velmora-taupe">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-4xl leading-none text-velmora-espresso sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-sm leading-7 text-velmora-taupe sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
