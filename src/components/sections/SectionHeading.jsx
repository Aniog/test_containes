import React from 'react'
import { cn } from '@/lib/utils'

export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-700">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-700 sm:text-lg">{description}</p>}
    </div>
  )
}
