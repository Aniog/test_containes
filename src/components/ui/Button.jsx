import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-gold text-ivory hover:bg-gold-deep border border-gold hover:border-gold-deep',
  outline:
    'bg-transparent text-ink border border-ink hover:bg-ink hover:text-ivory',
  dark: 'bg-ink text-ivory border border-ink hover:bg-espresso hover:border-espresso',
  light: 'bg-ivory text-ink border border-ivory hover:bg-cream',
  ghost: 'bg-transparent text-ink border border-transparent hover:text-gold',
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
        'inline-flex items-center justify-center font-sans uppercase tracking-wide2 transition-all duration-300 ease-out cursor-pointer select-none',
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
