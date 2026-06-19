import { cn } from '@/lib/utils';

export default function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-bg-warm text-secondary',
    accent: 'bg-accent text-white',
    gold: 'bg-gold text-white',
    outline: 'bg-transparent border border-border text-secondary',
  };

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
