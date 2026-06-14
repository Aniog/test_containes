import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md',
  children,
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-600 shadow-sm',
    secondary: 'bg-primary text-white hover:bg-primary-600 shadow-sm',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-300 disabled:opacity-50 disabled:cursor-not-allowed',
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

export default Button
