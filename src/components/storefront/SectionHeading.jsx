const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment =
    align === 'center'
      ? 'mx-auto max-w-2xl text-center'
      : 'max-w-2xl text-left'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-[#c19a6b]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-['Cormorant_Garamond'] text-4xl leading-none text-[#241a13] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[#6f5946] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
