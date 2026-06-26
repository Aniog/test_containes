import React from 'react'
import { cn } from '@/lib/utils'

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-3xl border border-brand-line bg-brand-white text-brand-ink shadow-sm',
      className,
    )}
    {...props}
  />
))
Card.displayName = 'Card'

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 md:p-8', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export { Card, CardContent }
