const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={[ 'space-y-4', align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl', ].join(' ')}>
    {eyebrow ? (
      <p className="tracking-kicker text-xs uppercase text-amber-200">{eyebrow}</p>
    ) : null}
    <div className="space-y-3">
      <h2 className="font-display text-4xl font-semibold leading-none text-stone-50 md:text-5xl">{title}</h2>
      {description ? (
        <p className="max-w-xl text-sm leading-7 text-stone-300 md:text-base">{description}</p>
      ) : null}
    </div>
  </div>
)

export default SectionHeading
