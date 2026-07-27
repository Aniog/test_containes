import React from 'react'
import { cn } from '@/lib/utils'

export default function SectionHeader({ eyebrow, title, lead, align = 'center', dark = false, id }) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left'
      )}
    >
      {eyebrow && (
        <p className={cn('text-sm font-semibold uppercase tracking-wider', dark ? 'text-accent' : 'text-brand')}>
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          'mt-3 text-3xl md:text-4xl font-bold tracking-tight',
          dark ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn('mt-4 text-base leading-relaxed', dark ? 'text-slate-300' : 'text-slate-600')}>
          {lead}
        </p>
      )}
    </div>
  )
}
