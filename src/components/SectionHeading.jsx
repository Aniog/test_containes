export default function SectionHeading({ eyebrow, title, desc, id, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p>}
      <h2 id={id} className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink md:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-7 text-brand-muted md:text-lg">{desc}</p>}
    </div>
  )
}
