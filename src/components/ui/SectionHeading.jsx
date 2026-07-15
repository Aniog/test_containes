export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-velmora-taupe">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl leading-none text-velmora-ink md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-velmora-taupe">{description}</p>}
    </div>
  )
}
