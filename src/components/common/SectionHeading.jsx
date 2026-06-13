export default function SectionHeading({ eyebrow, title, text, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-blue">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-navy md:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-7 text-brand-subtle md:text-lg">{text}</p>}
    </div>
  )
}
