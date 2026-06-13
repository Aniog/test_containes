import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const variants = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm',
    outline: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
    dark: 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2',
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