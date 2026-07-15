export default function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  return (
    <div className={align === 'left' ? 'max-w-2xl text-left' : 'mx-auto max-w-2xl text-center'}>
      <p className="text-xs font-bold uppercase tracking-[0.36em] text-velmora-bronze">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-5xl leading-none text-velmora-ink md:text-6xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-7 text-velmora-mist">{copy}</p>}
    </div>
  )
}
