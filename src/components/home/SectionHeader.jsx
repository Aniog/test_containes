export default function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl text-velmora-ink`}>
      {eyebrow && <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-bronze">{eyebrow}</p>}
      <h2 className="font-serif text-4xl leading-tight tracking-tight text-velmora-ink md:text-6xl">{title}</h2>
      {copy && <p className="mt-4 font-sans text-sm leading-7 text-velmora-cocoa md:text-base">{copy}</p>}
    </div>
  )
}
