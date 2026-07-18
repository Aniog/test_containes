export default function SectionHeading({ eyebrow, title, text, align = 'center', id }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto'

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && <p className="text-xs font-bold uppercase tracking-nav text-velmora-gold">{eyebrow}</p>}
      <h2 id={id} className="mt-3 font-serif text-4xl font-semibold leading-tight text-velmora-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-velmora-cocoa sm:text-lg">{text}</p>}
    </div>
  )
}
