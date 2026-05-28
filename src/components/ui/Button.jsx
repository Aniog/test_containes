import React from 'react'
import { cn } from '@/lib/utils'

export function Button({ children, variant = 'primary', size = 'md', className, disabled, ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-[#4B2D8F] hover:bg-[#3a2270] text-white focus:ring-[#4B2D8F]',
    secondary: 'bg-[#C9A84C] hover:bg-[#b8943d] text-white focus:ring-[#C9A84C]',
    outline: 'border-2 border-[#4B2D8F] text-[#4B2D8F] hover:bg-[#4B2D8F] hover:text-white focus:ring-[#4B2D8F]',
    ghost: 'text-[#4B2D8F] hover:bg-purple-50 focus:ring-[#4B2D8F]',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
    success: 'bg-emerald-500 hover:bg-emerald-600 text-white focus:ring-emerald-500',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  }
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
