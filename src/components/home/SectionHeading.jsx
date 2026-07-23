export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', idPrefix }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`mb-10 flex flex-col ${alignment}`}>
      {eyebrow && <p id={`${idPrefix}-eyebrow`} className="mb-3 text-xs font-bold uppercase tracking-[0.26em] text-velmora-gold-deep">{eyebrow}</p>}
      <h2 id={`${idPrefix}-title`} className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-velmora-ink md:text-6xl">{title}</h2>
      {subtitle && <p id={`${idPrefix}-subtitle`} className="mt-5 max-w-2xl text-sm leading-7 text-velmora-charcoal/75 md:text-base">{subtitle}</p>}
    </div>
  )
}
