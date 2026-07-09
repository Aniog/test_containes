export default function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl text-velmora-espresso`}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-velmora-umber">{eyebrow}</p>}
      <h2 className="font-serif text-4xl font-medium leading-tight md:text-6xl">{title}</h2>
      {copy && <p className={`${centered ? 'mx-auto' : ''} mt-4 max-w-2xl text-base leading-7 text-velmora-umber md:text-lg`}>{copy}</p>}
    </div>
  )
}
