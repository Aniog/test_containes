import React from 'react'
import { cn } from '../../lib/utils'

export function Button({ children, variant = 'primary', size = 'md', className, disabled, onClick, type = 'button' }) {
  const variants = {
    primary: 'bg-rose-600 hover:bg-rose-500 text-white shadow-sm',
    secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-800',
    outline: 'border border-slate-300 hover:border-rose-400 text-slate-700 hover:text-rose-700 bg-white',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-transparent',
    danger: 'bg-red-600 hover:bg-red-500 text-white',
    success: 'bg-emerald-600 hover:bg-emerald-500 text-white',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  )
}
