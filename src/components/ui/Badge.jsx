import { cn } from '@/lib/utils';

const variants = {
  gold: 'bg-gold text-white',
  outline: 'bg-transparent border border-gold text-gold',
  subtle: 'bg-blush text-warm-gray',
  dark: 'bg-charcoal text-white',
};

export function Badge({ children, variant = 'subtle', className }) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
