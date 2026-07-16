const SectionHeader = ({ eyebrow, title, description, align = 'center' }) => (
  <div className={`mx-auto max-w-3xl ${align === 'left' ? 'text-left' : 'text-center'}`}>
    {eyebrow && (
      <p className="mb-3 text-xs font-semibold uppercase tracking-nav text-velmora-bronze">
        {eyebrow}
      </p>
    )}
    <h2 className="font-serif text-4xl font-semibold leading-tight text-velmora-espresso md:text-6xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-7 text-velmora-muted md:text-lg">
        {description}
      </p>
    )}
  </div>
)

export default SectionHeader
