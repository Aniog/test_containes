import { cn } from '@/lib/utils'

export function Button({
  children,
  variant = 'solid',
  size = 'md',
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-sans text-sm tracking-wider uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
        variant === 'solid' &&
          'bg-velmora-gold text-velmora-dark hover:bg-velmora-gold-light',
        variant === 'outline' &&
          'border border-velmora-dark text-velmora-dark bg-transparent hover:bg-velmora-dark hover:text-velmora-cream',
        variant === 'outline-light' &&
          'border border-velmora-cream text-velmora-cream bg-transparent hover:bg-velmora-cream hover:text-velmora-dark',
        variant === 'ghost' &&
          'bg-transparent text-velmora-dark hover:bg-velmora-warm',
        size === 'sm' && 'px-5 py-2.5',
        size === 'md' && 'px-7 py-3.5',
        size === 'lg' && 'px-10 py-4',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
