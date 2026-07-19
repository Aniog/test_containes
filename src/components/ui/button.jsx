import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-gold text-white hover:bg-gold-dark',
    outline: 'border border-gold text-gold bg-transparent hover:bg-gold hover:text-white',
    ghost: 'text-taupe hover:text-dark bg-transparent hover:bg-transparent',
    dark: 'bg-dark text-white hover:bg-dark/90',
  }
  const sizes = {
    default: 'px-8 py-3 text-sm',
    sm: 'px-4 py-2 text-xs',
    lg: 'px-10 py-4 text-base',
    icon: 'p-2',
  }
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-sans font-medium uppercase tracking-[0.08em] transition-all duration-300 rounded-none',
        variants[variant],
        sizes[size],
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button }