import { cn } from '@/lib/utils'

export function Badge({ children, variant = 'default', className, ...props }) {
  const variants = {
    default: 'bg-indigo-600 text-white',
    secondary: 'bg-gray-700 text-gray-200',
    outline: 'border border-gray-600 text-gray-300',
    success: 'bg-green-600 text-white',
    warning: 'bg-yellow-500 text-black',
    danger: 'bg-red-600 text-white',
    steam: 'bg-[#1b2838] text-[#c7d5e0] border border-[#4c6b22]',
    epic: 'bg-[#2d2d2d] text-white border border-gray-600',
    nintendo: 'bg-red-600 text-white',
    playstation: 'bg-blue-700 text-white',
    xbox: 'bg-green-700 text-white',
  }
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold', variants[variant] || variants.default, className)} {...props}>
      {children}
    </span>
  )
}

export function Button({ children, variant = 'default', size = 'md', className, disabled, ...props }) {
  const variants = {
    default: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
    outline: 'border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white bg-transparent',
    ghost: 'hover:bg-gray-800 text-gray-300 hover:text-white bg-transparent',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant] || variants.default,
        sizes[size] || sizes.md,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export function Card({ children, className, ...props }) {
  return (
    <div className={cn('bg-gray-800 border border-gray-700 rounded-xl overflow-hidden', className)} {...props}>
      {children}
    </div>
  )
}

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all',
        className
      )}
      {...props}
    />
  )
}

export function Select({ children, className, ...props }) {
  return (
    <select
      className={cn(
        'bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all',
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}

export function Skeleton({ className, ...props }) {
  return (
    <div className={cn('animate-pulse bg-gray-700 rounded', className)} {...props} />
  )
}
