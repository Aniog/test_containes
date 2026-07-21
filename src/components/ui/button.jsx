import React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = {
  base: 'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    primary: 'bg-[#C9A96E] text-white hover:bg-[#B8944F] shadow-sm hover:shadow-md',
    outline: 'border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white',
    ghost: 'text-[#C9A96E] hover:bg-[#C9A96E]/10',
    link: 'text-[#C9A96E] underline-offset-4 hover:underline',
  },
  sizes: {
    sm: 'h-9 px-4 py-2',
    md: 'h-11 px-6 py-2.5',
    lg: 'h-12 px-8 py-3 text-base',
    icon: 'h-10 w-10',
  }
}

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', ...props }, ref) => {
  return (
    <button
      className={cn(
        buttonVariants.base,
        buttonVariants.variants[variant],
        buttonVariants.sizes[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export { Button, buttonVariants }
