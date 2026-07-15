export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'

  return (
    <div className={alignment}>
      <p className="text-xs uppercase tracking-[0.35em] text-gold">{eyebrow}</p>
      <h2 className="mt-4 font-serif text-4xl leading-none text-espresso sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-mocha sm:text-base">{description}</p>
    </div>
  )
}
