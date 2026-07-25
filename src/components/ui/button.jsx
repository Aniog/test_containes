import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-ink text-cream hover:bg-gold hover:text-ink border border-ink hover:border-gold',
  gold:
    'bg-gold text-ink hover:bg-gold-deep hover:text-cream border border-gold hover:border-gold-deep',
  outline:
    'bg-transparent text-ink border border-ink/30 hover:border-gold hover:text-gold-deep',
  'outline-light':
    'bg-transparent text-cream border border-cream/40 hover:border-gold hover:text-gold',
  ghost: 'bg-transparent text-ink border border-transparent hover:text-gold-deep',
}

const sizes = {
  sm: 'px-5 py-2.5 text-[11px]',
  md: 'px-7 py-3.5 text-xs',
  lg: 'px-9 py-4 text-xs',
  icon: 'p-2',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-luxe transition-all duration-300 ease-luxe disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
