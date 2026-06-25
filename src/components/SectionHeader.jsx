import React from 'react'
import { cn } from '@/lib/utils'

const SectionHeader = ({ badge, title, subtitle, center = true, className }) => {
  return (
    <div className={cn(center && 'text-center', 'mb-12', className)}>
      {badge && (
        <span className="inline-block px-3 py-1 bg-navy-50 text-navy-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

export default SectionHeader
