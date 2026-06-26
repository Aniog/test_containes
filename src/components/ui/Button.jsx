import { cn } from '@/lib/utils'

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  as: Component = 'button',
  ...props
}) {
  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    accent:
      'bg-accent text-white hover:bg-accent-dark focus:ring-accent',
    outline:
      'border-2 border-primary text-primary bg-transparent hover:bg-primary-light focus:ring-primary',
    ghost:
      'bg-transparent text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-200',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
