import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-brand-gold text-brand-charcoal hover:bg-brand-gold-light active:bg-brand-gold-dark font-medium tracking-wider uppercase text-sm transition-all duration-300',
  secondary:
    'border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal font-medium tracking-wider uppercase text-sm transition-all duration-300',
  ghost:
    'text-brand-charcoal hover:text-brand-gold transition-colors duration-300 font-medium',
}

const sizes = {
  sm: 'py-2 px-5 text-xs',
  md: 'py-3 px-8 text-sm',
  lg: 'py-4 px-10 text-sm',
  full: 'py-4 px-8 text-sm w-full',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
