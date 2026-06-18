import React from 'react'

function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'

  return (
    <div className={alignment}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-amber-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl text-stone-950 sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-stone-600 sm:text-base">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeading
