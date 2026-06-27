import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const variants = {
    primary: 'bg-gold text-white hover:bg-gold-dark',
    outline: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
    ghost: 'text-charcoal hover:bg-warm-ivory',
    dark: 'bg-charcoal text-white hover:bg-charcoal-light',
  }

  const sizes = {
    sm: 'px-5 py-2 text-xs',
    default: 'px-8 py-3 text-xs',
    lg: 'px-10 py-4 text-sm',
  }

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center tracking-[0.12em] uppercase font-medium transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export { Button }