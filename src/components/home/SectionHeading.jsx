function SectionHeading({ eyebrow, title, children, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-deepgold">{eyebrow}</p>}
      <h2 className="font-serif text-4xl leading-tight text-velmora-espresso sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-sm leading-7 text-velmora-ink/75 sm:text-base">{children}</p>}
    </div>
  )
}

export default SectionHeading
