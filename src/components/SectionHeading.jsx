import React from 'react'

const SectionHeading = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  
  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="inline-block text-xs font-semibold tracking-[2px] uppercase text-slate-500 mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
