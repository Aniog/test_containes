import React from 'react'

export function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'
  return (
    <div className={alignment}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">{description}</p>
      )}
    </div>
  )
}

export function Container({ children, className = '' }) {
  return <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
}

export function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}
