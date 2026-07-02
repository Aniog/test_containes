import { cn } from '@/lib/utils';

export function Button({
  children,
  variant = 'solid',
  size = 'md',
  className,
  disabled,
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-none font-sans text-sm font-medium tracking-wide transition-all duration-300 ease-luxury focus:outline-none focus-visible:ring-2 focus-visible:ring-velmora-gold/60 disabled:cursor-not-allowed disabled:opacity-50',
        variant === 'solid' &&
          'bg-velmora-gold text-white hover:bg-velmora-gold-dark active:scale-[0.98]',
        variant === 'outline' &&
          'border border-velmora-base bg-transparent text-velmora-base hover:bg-velmora-base hover:text-velmora-cream active:scale-[0.98]',
        variant === 'ghost' &&
          'bg-transparent text-velmora-base hover:bg-velmora-cream-dark active:scale-[0.98]',
        variant === 'white' &&
          'bg-white text-velmora-base hover:bg-velmora-cream-dark active:scale-[0.98]',
        size === 'sm' && 'h-9 px-4',
        size === 'md' && 'h-11 px-6',
        size === 'lg' && 'h-12 px-8 text-base',
        size === 'full' && 'h-12 w-full px-6 text-base',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
