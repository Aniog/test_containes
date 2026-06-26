import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-gold text-ink hover:bg-gold-dark hover:text-white',
  secondary: 'bg-transparent border-2 border-ink text-ink hover:bg-ink hover:text-white',
  outlineLight: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-ink',
  ghost: 'bg-transparent text-ink hover:bg-border-soft',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  as: Component = 'button',
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center rounded font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
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
