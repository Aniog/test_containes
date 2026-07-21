import { cn } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

const variants = {
  primary:
    'bg-gold text-espresso hover:bg-gold-soft',
  dark:
    'bg-espresso text-ivory hover:bg-ink',
  outline:
    'border border-ink text-ink hover:bg-ink hover:text-ivory',
  outlineLight:
    'border border-ivory/70 text-ivory hover:bg-ivory hover:text-espresso',
  ghost: 'text-ink hover:text-gold',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[11px]',
  md: 'px-8 py-3.5 text-xs',
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
        'inline-flex items-center justify-center gap-2 font-sans uppercase tracking-widest3 font-medium transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
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

export { PLACEHOLDER }
