const SectionHeading = ({ eyebrow, title, copy, align = 'left' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
    <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">{title}</h2>
    {copy ? <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{copy}</p> : null}
  </div>
)

export default SectionHeading
