import { cn } from '@/lib/utils'

export function Button({ className, variant = 'primary', size = 'md', disabled, children, ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    primary: 'bg-blue-800 text-white hover:bg-blue-900 focus:ring-blue-700',
    secondary: 'bg-white text-blue-800 border border-blue-800 hover:bg-blue-50 focus:ring-blue-700',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    ghost: 'text-blue-800 hover:bg-blue-50 focus:ring-blue-700',
    gold: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} disabled={disabled} {...props}>
      {children}
    </button>
  )
}
