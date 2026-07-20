import { cn } from '@/lib/utils';

export function Badge({ children, variant = 'gold', className }) {
  const variants = {
    gold: 'bg-gold text-ivory',
    outline: 'border border-gold text-gold',
    dark: 'bg-charcoal text-ivory',
    muted: 'bg-ivory-dark text-taupe',
  };

  return (
    <span className={cn(
      'inline-block px-2.5 py-0.5 text-xs font-inter font-medium tracking-widest uppercase',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}
