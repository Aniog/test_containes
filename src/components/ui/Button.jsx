import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-[#c9a84c] text-[#0d0f1a] hover:bg-[#e8c96a] font-semibold',
  secondary: 'bg-[#1a1e35] border border-[#2a2f52] text-[#e8e4d9] hover:border-[#c9a84c] hover:text-[#c9a84c]',
  danger: 'bg-[#c94c4c] text-white hover:bg-red-600',
  ghost: 'text-[#9a95a8] hover:text-[#e8e4d9] hover:bg-[#131629]',
  outline: 'border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0d0f1a]',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        'rounded-lg transition-all duration-150 inline-flex items-center gap-2 cursor-pointer',
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
