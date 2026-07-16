export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <div className="flex max-w-3xl flex-col gap-3">
        <h2 className="font-serif text-4xl leading-none text-espresso sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-sm leading-7 text-mocha sm:text-base">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
