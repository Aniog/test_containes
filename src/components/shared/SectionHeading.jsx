import React from 'react'

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={centered ? 'text-center mb-12' : 'mb-10'}>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeading
