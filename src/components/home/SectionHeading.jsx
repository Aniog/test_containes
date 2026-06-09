const SectionHeading = ({ eyebrow, title, description, light = false }) => (
  <div className="max-w-3xl space-y-4">
    <p
      className={`text-xs font-semibold uppercase tracking-widest ${
        light ? 'text-amber-300' : 'text-amber-600'
      }`}
    >
      {eyebrow}
    </p>
    <h2
      className={`font-serif text-3xl tracking-tight sm:text-4xl ${
        light ? 'text-white' : 'text-slate-900'
      }`}
    >
      {title}
    </h2>
    <p
      className={`max-w-2xl text-base leading-7 ${
        light ? 'text-slate-300' : 'text-slate-600'
      }`}
    >
      {description}
    </p>
  </div>
)

export default SectionHeading
