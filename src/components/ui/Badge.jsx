import { cn } from '@/lib/utils';

const Badge = ({ children, variant = 'default', className }) => {
  const variants = {
    default: 'bg-[var(--color-border)] text-[var(--color-dark)]',
    accent: 'bg-[var(--color-accent)] text-white',
    outline: 'bg-transparent border border-[var(--color-border)] text-[var(--color-secondary)]'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-sm text-xs font-sans font-medium tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
