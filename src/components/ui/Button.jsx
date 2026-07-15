import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(
  ({ className, variant = 'solid', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
    
    const variants = {
      solid: 'bg-[#C5A46E] text-[#0A0806] hover:bg-[#B08F5A] focus:ring-[#C5A46E]',
      outline: 'border border-[#C5A46E] text-[#C5A46E] hover:bg-[#C5A46E] hover:text-[#0A0806] focus:ring-[#C5A46E]',
      ghost: 'text-[#0A0806] hover:bg-[#F5F2ED] focus:ring-[#C5A46E]',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-sm tracking-[1px]',
      lg: 'px-8 py-4 text-base tracking-[1.5px]',
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
  }
)

Button.displayName = 'Button'

export default Button
