const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    {eyebrow ? (
      <p className="text-xs uppercase tracking-[0.34em] text-stone-500">{eyebrow}</p>
    ) : null}
    <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl leading-tight text-stone-950 sm:text-5xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
        {description}
      </p>
    ) : null}
  </div>
)

export default SectionHeading
