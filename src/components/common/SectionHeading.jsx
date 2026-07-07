export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? (
        <p className="max-w-xl text-base leading-7 text-velmora-espresso/75 md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
