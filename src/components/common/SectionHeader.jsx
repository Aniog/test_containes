import React from 'react'

export default function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto'
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-widest text-velmora-antique">{eyebrow}</p>}
      <h2 className="font-serif text-4xl font-medium leading-none text-velmora-espresso md:text-6xl">{title}</h2>
      {copy && <p className="max-w-2xl text-base leading-7 text-velmora-smoke md:text-lg">{copy}</p>}
    </div>
  )
}
