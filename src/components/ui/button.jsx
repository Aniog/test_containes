import React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = {
  primary: 'bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]',
  outline: 'border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white',
  accent: 'bg-[#c9a96e] text-white hover:bg-[#b8944f]',
  ghost: 'text-[#1a1a1a] hover:bg-[#f5f5f5]'
}

export function Button({ className, variant = 'primary', children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#c9a96e] focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
        buttonVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
