export default function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`mx-auto mb-10 flex max-w-3xl flex-col ${alignment} text-velmora-espresso md:mb-14`}>
      {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-velmora-goldDeep">{eyebrow}</p>}
      <h2 className="font-serif text-5xl font-semibold leading-none text-balance text-velmora-espresso md:text-7xl">{title}</h2>
      {copy && <p className="mt-5 max-w-2xl text-sm leading-7 text-velmora-charcoal md:text-base">{copy}</p>}
    </div>
  )
}
