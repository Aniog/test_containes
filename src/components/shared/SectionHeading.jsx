const SectionHeading = ({ eyebrow, title, description, align = "left" }) => {
  const alignment = align === "center" ? "mx-auto text-center" : ""

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-tight text-velvet md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-velvet/72 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
