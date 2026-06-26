import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-md'
  
  const variants = {
    primary: 'bg-[#0F172A] text-white hover:bg-[#1E293B]',
    secondary: 'bg-white text-[#0F172A] border border-[#E2E8F0] hover:bg-[#F8FAFC]',
    accent: 'bg-[#1E40AF] text-white hover:bg-[#1E3A8A]'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
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