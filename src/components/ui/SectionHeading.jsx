const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? <p className="luxury-kicker">{eyebrow}</p> : null}
      <h2 className="mt-4 font-serif text-4xl leading-none text-stone-900 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
