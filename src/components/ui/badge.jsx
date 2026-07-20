import React from 'react'
import { cn } from '@/lib/utils'

const Badge = ({ className, variant = 'default', ...props }) => {
  const variants = {
    default: 'border-transparent bg-brand-ink text-white',
    outline: 'text-brand-ink border border-brand-line',
    accent: 'border-transparent bg-brand-accent text-white',
  }
  return (
    <div
      className={cn('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', variants[variant], className)}
      {...props}
    />
  )
}

export { Badge }
