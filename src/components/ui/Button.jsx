import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-gold text-ink hover:bg-gold-soft',
  dark:
    'bg-ink text-cream hover:bg-espresso',
  outline:
    'border border-ink/30 text-ink hover:bg-ink hover:text-cream',
  outlineLight:
    'border border-cream/40 text-cream hover:bg-cream hover:text-ink',
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
        'inline-flex items-center justify-center font-sans font-medium uppercase tracking-widest2 transition-colors duration-300 cursor-pointer select-none',
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
