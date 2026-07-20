export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`mx-auto mb-10 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">{eyebrow}</p>}
      <h2 className="font-serif text-4xl font-medium leading-tight text-velmora-ink sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-velmora-cocoa/75">{text}</p>}
    </div>
  )
}
