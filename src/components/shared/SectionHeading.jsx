function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverted = false,
}) {
  return (
    <div className={`space-y-4 ${align === 'center' ? 'text-center' : ''}`}>
      <p className={`text-xs uppercase tracking-[0.35em] ${inverted ? 'text-stone-300' : 'text-stone-500'}`}>
        {eyebrow}
      </p>
      <h2
        className={`font-serif text-4xl leading-none sm:text-5xl ${
          inverted ? 'text-stone-50' : 'text-stone-900'
        }`}
      >
        {title}
      </h2>
      <p
        className={`max-w-2xl text-sm leading-7 sm:text-base ${
          align === 'center' ? 'mx-auto' : ''
        } ${inverted ? 'text-stone-300' : 'text-stone-600'}`}
      >
        {description}
      </p>
    </div>
  )
}

export default SectionHeading
