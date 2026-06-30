import React from 'react'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-espresso-800 text-cream-50 hover:bg-espresso-900 border border-espresso-800',
  secondary: 'bg-transparent text-espresso-800 border border-espresso-800 hover:bg-espresso-800 hover:text-cream-50',
  gold: 'bg-gold text-white hover:bg-gold-dark border border-gold',
  ghost: 'bg-transparent text-espresso-800 hover:bg-cream-200',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  loading,
  fullWidth,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span>Loading...</span>
        </span>
      ) : children}
    </button>
  )
}
