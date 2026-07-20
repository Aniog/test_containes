import { cn } from '@/lib/utils'

export function Button({
  children,
  variant = 'solid',
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-all duration-300 disabled:opacity-50',
        variant === 'solid' &&
          'bg-velmora-gold text-white hover:bg-velmora-gold-dark',
        variant === 'outline' &&
          'border border-velmora-charcoal text-velmora-charcoal bg-transparent hover:bg-velmora-charcoal hover:text-white',
        variant === 'ghost' && 'text-velmora-charcoal hover:text-velmora-gold',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
