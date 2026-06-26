import React from 'react'
import { cn } from '@/lib/utils'

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div className={cn(
      'max-w-3xl',
      align === 'center' && 'mx-auto text-center',
      align === 'left' && 'text-left',
      className
    )}>
      {eyebrow && (
        <span className="inline-block text-[--color-accent] font-semibold text-sm uppercase tracking-wider mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[--color-text-dark] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[--color-text-muted] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
