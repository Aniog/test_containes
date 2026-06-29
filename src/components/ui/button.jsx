import React from 'react'
import { cn } from '@/lib/utils'

const variantStyles = {
  default: 'bg-gold-500 text-white hover:bg-gold-400 shadow-sm',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'border border-stone-200 bg-white text-text-primary hover:bg-cream-100 hover:border-gold-500',
  secondary: 'bg-navy-700 text-white hover:bg-navy-600',
  ghost: 'text-text-primary hover:bg-cream-100',
  link: 'text-gold-500 underline-offset-4 hover:underline',
}

const sizeStyles = {
  default: 'h-11 px-6 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-12 rounded-lg px-8 text-base',
  xl: 'h-14 rounded-lg px-10 text-lg',
  icon: 'h-10 w-10',
}

export const Button = React.forwardRef(({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    />
  )
})

Button.displayName = 'Button'