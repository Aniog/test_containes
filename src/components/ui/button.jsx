import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary: 'bg-gold text-white hover:bg-gold-hover',
    outline: 'border border-gold text-gold bg-transparent hover:bg-gold hover:text-white',
    dark: 'bg-[#1A1A1A] text-white hover:bg-[#333]',
    ghost: 'text-[#1A1A1A] hover:text-gold bg-transparent',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs tracking-wider',
    md: 'px-8 py-3 text-sm tracking-wider',
    lg: 'px-10 py-4 text-sm tracking-wider',
  }

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button