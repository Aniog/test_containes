import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-gold text-ink hover:bg-gold-deep hover:text-cream',
  outline:
    'border border-ink text-ink hover:bg-ink hover:text-cream',
  outlineLight:
    'border border-cream/70 text-cream hover:bg-cream hover:text-ink',
  dark:
    'bg-ink text-cream hover:bg-ink-soft',
}

const sizes = {
  md: 'px-8 py-3.5 text-xs',
  sm: 'px-5 py-2.5 text-[11px]',
  lg: 'px-10 py-4 text-xs',
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
        'inline-flex items-center justify-center gap-2 font-sans uppercase tracking-widest2 font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
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
