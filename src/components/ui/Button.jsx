import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-accent text-white hover:bg-accent-hover',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'hover:bg-gray-100 text-text-primary',
    secondary: 'bg-primary-light text-white hover:bg-primary',
  }

  const sizes = {
    default: 'px-6 py-3',
    sm: 'px-4 py-2 text-sm',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button }