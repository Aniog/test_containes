import React from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-brand-white',
  secondary:
    'border border-brand-line bg-brand-white text-brand-navy hover:border-brand-navy hover:bg-brand-mist',
  ghost: 'bg-transparent text-brand-white hover:bg-brand-white/10',
}

const sizes = {
  default: 'h-11 px-5 text-sm md:text-base',
  lg: 'h-12 px-6 text-base',
}

export function buttonVariants({ variant = 'primary', size = 'default', className = '' } = {}) {
  return cn(
    'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-white disabled:pointer-events-none disabled:opacity-60',
    variants[variant],
    sizes[size],
    className,
  )
}

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', ...props }, ref) => (
  <button
    className={buttonVariants({ variant, size, className })}
    ref={ref}
    {...props}
  />
))

Button.displayName = 'Button'

export { Button }
