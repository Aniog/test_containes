import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-[#f0b830] text-[#09080e] hover:bg-[#ffd060] font-semibold',
  secondary: 'bg-[#181230] border border-[#2e2650] text-[#f0ecff] hover:border-[#f0b830] hover:text-[#f0b830]',
  danger: 'bg-[#f04040] text-white hover:bg-red-600',
  ghost: 'text-[#9890b8] hover:text-[#f0ecff] hover:bg-[#100e1a]',
  outline: 'border border-[#f0b830] text-[#f0b830] hover:bg-[#f0b830] hover:text-[#09080e]',
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
