import { cn } from '@/lib/utils'

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
  outline:
    'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary',
  secondary: 'bg-secondary text-slate-900 hover:bg-amber-500 focus:ring-secondary',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 focus:ring-slate-300',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  asChild,
  ...props
}) {
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
