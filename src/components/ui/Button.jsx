import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-amber-300 text-stone-950 hover:bg-amber-200 shadow-sm shadow-amber-950/10',
  secondary:
    'border border-stone-300 bg-transparent text-stone-900 hover:border-stone-900 hover:bg-stone-100',
  inverse:
    'border border-white/20 bg-white/10 text-stone-50 hover:bg-white/15',
}

export function buttonStyles(variant = 'primary', className) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-medium uppercase tracking-[0.28em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 disabled:cursor-not-allowed disabled:opacity-60',
    variants[variant],
    className,
  )
}

export default function Button({
  as: Component = 'button',
  className,
  children,
  variant = 'primary',
  type,
  ...props
}) {
  return (
    <Component
      className={buttonStyles(variant, className)}
      type={Component === 'button' ? (type ?? 'button') : undefined}
      {...props}
    >
      {children}
    </Component>
  )
}
