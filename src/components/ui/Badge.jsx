import React from 'react'
import { cn } from '@/lib/utils'

const tones = {
  accent: 'bg-accent-soft text-accent-strong',
  ink: 'bg-ink/5 text-ink',
  outline: 'border border-line text-ink',
  onDark: 'bg-white/10 text-bg border border-white/15',
}

const Badge = React.forwardRef(function Badge(
  { className, tone = 'accent', children, ...props },
  ref
) {
  return (
    <span
      ref={ref}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-eyebrow',
        tones[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
})

export { Badge }
export default Badge
