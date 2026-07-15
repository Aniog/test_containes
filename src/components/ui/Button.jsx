import { cn } from '@/lib/utils'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'inline-flex items-center justify-center text-vel-base hover:text-vel-accent transition-colors',
  }
  const sizes = {
    sm: 'px-6 py-2.5 text-xs',
    md: '',
    lg: 'px-10 py-4 text-base',
    icon: 'p-2',
  }

  return (
    <button
      className={cn(variants[variant], size !== 'md' && sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
