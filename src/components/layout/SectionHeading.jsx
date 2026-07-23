import React from 'react'

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
    {eyebrow ? (
      <p className="mb-3 text-xs uppercase tracking-[0.32em] text-velmora-gold">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="text-3xl leading-tight text-velmora-ink sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-5 text-sm leading-7 text-velmora-muted sm:text-base">
        {description}
      </p>
    ) : null}
  </div>
)

export default SectionHeading
