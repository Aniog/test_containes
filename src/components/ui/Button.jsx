import { cn } from '@/lib/utils'

const variants = {
  solid: 'bg-gold text-cream-soft hover:bg-gold-deep',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-cream-soft',
  outlineLight: 'border border-cream/60 text-cream hover:bg-cream hover:text-ink',
  ghost: 'text-ink hover:text-gold-deep',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[11px]',
  md: 'px-8 py-3.5 text-xs',
  lg: 'px-10 py-4 text-xs',
}

export default function Button({
  as: Component = 'button',
  variant = 'solid',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center uppercase tracking-widest2 font-medium transition-colors duration-300 ease-elegant cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
