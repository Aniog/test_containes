import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ 
  className, 
  variant = 'solid', 
  size = 'default', 
  children, 
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    solid: "bg-[#A67C52] text-white hover:bg-[#8B6643] focus:ring-[#A67C52]",
    outline: "border border-[#A67C52] text-[#A67C52] hover:bg-[#A67C52] hover:text-white focus:ring-[#A67C52]",
    ghost: "text-[#1A1816] hover:bg-[#F5F2ED] focus:ring-[#A67C52]",
  }
  
  const sizes = {
    default: "px-8 py-3 text-sm tracking-[1px]",
    sm: "px-6 py-2 text-xs tracking-[1px]",
    lg: "px-10 py-4 text-base tracking-[1.5px]",
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
