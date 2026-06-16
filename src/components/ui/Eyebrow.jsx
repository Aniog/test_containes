import React from 'react'
import { cn } from '@/lib/utils'

export const Eyebrow = ({ children, className, tone = 'copper' }) => {
  const toneClass = tone === 'copper' ? 'text-copper' : 'text-copper-bright'
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className={cn('block h-px w-10 bg-current opacity-80', toneClass)} />
      <span
        className={cn(
          'text-xs font-medium tracking-eyebrow uppercase',
          toneClass
        )}
      >
        {children}
      </span>
    </div>
  )
}

export default Eyebrow
