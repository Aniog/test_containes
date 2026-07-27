const SectionHeader = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
    {eyebrow && (
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
        {eyebrow}
      </p>
    )}
    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-navy md:text-4xl">
      {title}
    </h2>
    {description && <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>}
  </div>
)

export default SectionHeader
