const SectionHeader = ({ eyebrow, title, description, align = 'left', light = false }) => (
  <div
    className={`space-y-4 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}
  >
    {eyebrow ? (
      <p className={`text-xs uppercase tracking-[0.35em] ${light ? 'text-gold-300' : 'text-velvet-700'}`}>
        {eyebrow}
      </p>
    ) : null}
    <h2 className={`font-serif text-4xl leading-none sm:text-5xl ${light ? 'text-cream-50' : 'text-velvet-950'}`}>
      {title}
    </h2>
    {description ? (
      <p className={`text-sm leading-7 sm:text-base ${light ? 'text-cream-200/80' : 'text-velvet-700'}`}>
        {description}
      </p>
    ) : null}
  </div>
)

export default SectionHeader
