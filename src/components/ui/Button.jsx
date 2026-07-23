import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}, ref) => {
  const base = 'inline-flex items-center justify-center font-sans font-medium tracking-wider uppercase transition-all duration-300 ease-out'
  
  const variants = {
    primary: 'bg-surface-900 text-ivory hover:bg-surface-800 active:bg-surface-950',
    gold: 'bg-gold text-white hover:bg-gold-dark active:bg-gold-muted',
    outline: 'border border-surface-900 text-surface-900 hover:bg-surface-900 hover:text-ivory',
    outlineGold: 'border border-gold text-gold hover:bg-gold hover:text-white',
    ghost: 'text-surface-700 hover:text-surface-900 hover:bg-surface-100',
  }

  const sizes = {
    sm: 'px-4 py-2 text-caption',
    md: 'px-6 py-3 text-caption',
    lg: 'px-8 py-4 text-body-sm',
    full: 'w-full px-6 py-4 text-body-sm',
  }

  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
