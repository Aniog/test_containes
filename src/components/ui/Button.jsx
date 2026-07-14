import { cn } from '@/lib/utils'

const variants = {
  solid: 'bg-ink text-ivory hover:bg-espresso',
  accent: 'bg-champagne text-ink hover:bg-gold',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-ivory',
  outlineLight: 'border border-ivory/70 text-ivory hover:bg-ivory hover:text-ink',
  ghost: 'text-ink hover:bg-ink/5',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[11px]',
  md: 'px-7 py-3.5 text-xs',
  lg: 'px-9 py-4 text-xs',
}

export default function Button({
  as: As = 'button',
  variant = 'solid',
  size = 'md',
  className,
  children,
  ...rest
}) {
  return (
    <As
      className={cn(
        'inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-widest2 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
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
