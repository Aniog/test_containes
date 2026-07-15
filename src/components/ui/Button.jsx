import { cn } from '@/lib/utils';

export function Button({
  children,
  variant = 'primary',
  className,
  ...props
}) {
  const variants = {
    primary:
      'bg-velmora-ink text-velmora-porcelain border-velmora-ink hover:bg-velmora-charcoal hover:border-velmora-charcoal',
    outline:
      'bg-transparent text-velmora-ink border-velmora-ink hover:bg-velmora-ink hover:text-velmora-porcelain',
    ghost:
      'bg-transparent text-velmora-ink border-transparent hover:bg-velmora-stone',
    accent:
      'bg-velmora-gold text-white border-velmora-gold hover:bg-velmora-gold-dark hover:border-velmora-gold-dark',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
