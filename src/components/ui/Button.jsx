import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-gold text-cream hover:bg-gold-deep border border-gold hover:border-gold-deep',
  outline:
    'border border-ink text-ink hover:bg-ink hover:text-cream',
  outlineLight:
    'border border-cream/60 text-cream hover:bg-cream hover:text-ink',
  ghost: 'text-ink hover:text-gold-deep',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[11px]',
  md: 'px-7 py-3.5 text-xs',
  lg: 'px-9 py-4 text-xs',
}

export default function Button({
  as: As = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        'inline-flex items-center justify-center gap-2 font-sans uppercase tracking-wide2 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
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
