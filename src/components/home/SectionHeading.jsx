export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-2xl text-velmora-ink`}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-nav text-velmora-gold">{eyebrow}</p> : null}
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h2>
      {text ? <p className="mt-4 text-sm leading-7 text-velmora-clay sm:text-base">{text}</p> : null}
    </div>
  )
}
