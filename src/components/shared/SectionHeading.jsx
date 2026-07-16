export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="text-xs uppercase tracking-[0.34em] text-stone-500">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-4xl leading-tight text-stone-900 sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-stone-600">{description}</p>
      ) : null}
    </div>
  )
}
