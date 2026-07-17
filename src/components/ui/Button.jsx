import { cn } from '@/lib/utils'

const variants = {
  // Solid gold accent button
  primary:
    'bg-gold text-ink hover:bg-gold-deep hover:text-ivory border border-gold hover:border-gold-deep',
  // Outlined on light
  outline:
    'bg-transparent text-ink border border-ink hover:bg-ink hover:text-ivory',
  // Outlined on dark
  outlineLight:
    'bg-transparent text-ivory border border-ivory/40 hover:bg-ivory hover:text-ink',
  // Solid dark
  dark: 'bg-ink text-ivory border border-ink hover:bg-espresso hover:border-espresso',
  // Ghost / link-like
  ghost: 'bg-transparent text-ink border border-transparent hover:text-gold-deep',
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
  className,
  children,
  ...props
}) {
  return (
    <As
      className={cn(
        'inline-flex items-center justify-center gap-2 font-sans uppercase tracking-[0.18em] font-medium transition-all duration-300 rounded-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
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
