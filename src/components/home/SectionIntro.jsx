export default function SectionIntro({ eyebrow, title, text, align = 'center' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">{eyebrow}</p>}
      <h2 className="mt-3 font-serif text-4xl leading-tight text-velmora-espresso md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-velmora-mocha">{text}</p>}
    </div>
  )
}
