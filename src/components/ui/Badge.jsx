import { cn } from '@/lib/utils';

export function Badge({ children, className, variant = 'default' }) {
  const variants = {
    default: 'bg-primary/10 text-primary',
    dark: 'bg-foreground text-background',
    outline: 'border border-border text-muted-foreground',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs tracking-wider uppercase',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
