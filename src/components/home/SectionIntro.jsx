export default function SectionIntro({ eyebrow, title, copy, dark = false }) {
  return <div className="mx-auto max-w-3xl text-center"><p className="eyebrow">{eyebrow}</p><h2 className={`mt-3 font-display text-5xl font-medium leading-none md:text-6xl ${dark ? 'text-velmora-cream' : 'text-velmora-ink'}`}>{title}</h2>{copy && <p className={`mt-5 text-sm leading-7 md:text-base ${dark ? 'text-velmora-sand' : 'text-velmora-taupe'}`}>{copy}</p>}</div>
}
