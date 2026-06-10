import React from 'react'
import { cn } from '@/lib/utils'

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center', 
  light = false,
  className = '' 
}) => {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' && 'text-center max-w-3xl mx-auto',
      align === 'left' && 'text-left',
      className
    )}>
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold mb-4',
        light ? 'text-white' : 'text-primary'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'text-lg md:text-xl',
          light ? 'text-slate-200' : 'text-slate-600'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading