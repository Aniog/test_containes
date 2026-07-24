import * as React from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, variant = 'default', ...props }) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors',
        variant === 'default' && 'border-transparent bg-accent text-white',
        variant === 'secondary' && 'border-transparent bg-secondary text-secondary-foreground',
        variant === 'outline' && 'border-foreground text-foreground',
        className
      )}
      {...props}
    />
  )
}
