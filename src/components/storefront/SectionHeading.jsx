export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={alignment}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading mt-4">{title}</h2>
      {description ? <p className="section-copy mt-5">{description}</p> : null}
    </div>
  )
}
