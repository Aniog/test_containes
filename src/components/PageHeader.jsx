import React from 'react'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="mt-5 max-w-3xl text-base md:text-lg text-slate-300 leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  )
}
