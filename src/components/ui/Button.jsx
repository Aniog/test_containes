import React from 'react'
import { cn } from '@/lib/utils'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-none font-sans text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-gold text-white hover:bg-gold-dark',
    outline:
      'border border-espresso-900 text-espresso-900 bg-transparent hover:bg-espresso-900 hover:text-cream-50',
    ghost: 'text-espresso-900 hover:text-gold bg-transparent',
  }
  const sizes = {
    sm: 'px-5 py-2.5',
    md: 'px-8 py-3.5',
    lg: 'px-10 py-4 text-base',
  }
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
