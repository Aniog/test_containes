import { cn } from '@/lib/utils';

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
        'inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-gold text-ivory hover:bg-gold-dark shadow-soft hover:shadow-glow':
            variant === 'solid',
          'bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory':
            variant === 'outline',
          'bg-transparent text-charcoal border-b border-gold rounded-none pb-1 hover:text-gold-dark':
            variant === 'ghost',
          'px-6 py-3 text-sm': size === 'md',
          'px-8 py-4 text-sm uppercase tracking-widest': size === 'lg',
          'px-5 py-2.5 text-xs uppercase tracking-widest': size === 'sm',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
