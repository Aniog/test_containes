import { cn } from '@/lib/utils'

const VARIANTS = {
  primary:
    'bg-gold text-cream hover:bg-[#9a763f] border border-gold hover:border-[#9a763f]',
  outline:
    'border border-ink text-ink hover:bg-ink hover:text-cream bg-transparent',
  outlineLight:
    'border border-cream/70 text-cream hover:bg-cream hover:text-ink bg-transparent',
  ghost: 'bg-transparent text-ink hover:text-gold border border-transparent',
}

const SIZES = {
  sm: 'px-6 py-3 text-[11px]',
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
        'inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer select-none',
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}
