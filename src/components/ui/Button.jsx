import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-champagne text-ivory hover:bg-champagne-deep border border-champagne',
  outline:
    'border border-ink text-ink hover:bg-ink hover:text-ivory bg-transparent',
  outlineLight:
    'border border-ivory/70 text-ivory hover:bg-ivory hover:text-espresso bg-transparent',
  ghost: 'text-ink hover:text-champagne bg-transparent border border-transparent',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[11px]',
  md: 'px-8 py-4 text-[11px]',
  lg: 'px-10 py-5 text-xs',
}

export default function Button({
  as: As = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  return (
    <As
      className={cn(
        'inline-flex items-center justify-center font-sans uppercase tracking-[0.2em] transition-all duration-300 ease-luxury cursor-pointer select-none',
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </As>
  )
}
