export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl text-velmora-ink`}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">{eyebrow}</p>}
      <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] text-velmora-ink sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-sm leading-7 text-velmora-sable sm:text-base">{text}</p>}
    </div>
  )
}
