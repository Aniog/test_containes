import React from 'react'
import { cn } from '@/lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-widest3 text-gold mb-3">{eyebrow}</p>
      )}
      {title && (
        <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">{title}</h2>
      )}
      {subtitle && (
        <p className="mt-4 text-base text-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
