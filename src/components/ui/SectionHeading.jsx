function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <p className="font-sans-custom text-xs uppercase tracking-[0.38em] text-amber-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif-display text-3xl text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
