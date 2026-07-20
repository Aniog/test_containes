import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-champagne text-ivory hover:bg-champagne-deep border border-champagne hover:border-champagne-deep',
  outline:
    'border border-ink text-ink hover:bg-ink hover:text-ivory bg-transparent',
  outlineLight:
    'border border-ivory/40 text-ivory hover:bg-ivory hover:text-espresso bg-transparent',
  ghost: 'bg-transparent text-ink hover:text-champagne border border-transparent',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[11px]',
  md: 'px-8 py-4 text-xs',
  lg: 'px-10 py-5 text-xs',
}

export default function Button({
  as: As = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        'inline-flex items-center justify-center font-sans uppercase tracking-widest2 font-medium transition-all duration-300 rounded-sm select-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}
