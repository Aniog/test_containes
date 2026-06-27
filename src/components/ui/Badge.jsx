import { cn } from '@/lib/utils';

export default function Badge({ children, variant = 'accent', className }) {
  const variants = {
    accent: 'bg-[var(--color-accent)] text-white',
    secondary: 'bg-[var(--color-surface)] text-[var(--color-secondary)]',
    outline: 'border border-[var(--color-border)] text-[var(--color-secondary)]',
  };
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
