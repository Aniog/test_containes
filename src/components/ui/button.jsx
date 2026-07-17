import * as React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-slate-900 text-white hover:bg-slate-800',
      outline: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50',
      ghost: 'text-slate-700 hover:bg-slate-100',
      destructive: 'bg-red-600 text-white hover:bg-red-700',
      link: 'text-slate-900 underline-offset-4 hover:underline',
    }
    const sizes = {
      default: 'h-10 px-4 py-2 text-sm',
      sm: 'h-9 px-3 text-sm',
      lg: 'h-12 px-6 text-base',
      icon: 'h-10 w-10',
    }
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
