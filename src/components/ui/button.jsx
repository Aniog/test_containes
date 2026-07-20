import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60'
  const variants = {
    default: 'bg-brand-ink text-white hover:bg-black',
    outline: 'border border-brand-ink text-brand-ink hover:bg-brand-ink hover:text-white',
    ghost: 'text-brand-ink hover:bg-brand-warm',
    accent: 'bg-brand-accent text-white hover:bg-brand-accentHover',
  }
  const sizes = {
    default: 'h-11 px-6',
    sm: 'h-9 px-4 text-xs',
    lg: 'h-12 px-8 text-base',
    icon: 'h-10 w-10',
  }

  return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
})
Button.displayName = 'Button'

export { Button }
