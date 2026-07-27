import React from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const Button = React.forwardRef(({
  className,
  variant = 'default',
  size = 'default',
  loading = false,
  disabled,
  children,
  ...props
}, ref) => {
  const variants = {
    default: 'bg-brand-500 text-white hover:bg-brand-600 shadow-sm',
    secondary: 'bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-50 shadow-sm',
    outline: 'bg-transparent text-brand-500 border border-brand-500 hover:bg-brand-50',
    ghost: 'bg-transparent text-neutral-600 hover:bg-neutral-100',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 shadow-sm',
  }

  const sizes = {
    default: 'h-10 px-5 py-2 text-sm',
    sm: 'h-9 px-4 text-sm',
    lg: 'h-12 px-8 text-base',
    xl: 'h-14 px-10 text-lg',
  }

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button