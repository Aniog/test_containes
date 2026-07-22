import { cn } from '@/lib/utils';

export default function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-brand-gold/20 text-brand-gold border border-brand-gold/30',
    sale: 'bg-brand-error/20 text-brand-error border border-brand-error/30',
    new: 'bg-brand-success/20 text-brand-success border border-brand-success/30',
    bestseller: 'bg-brand-gold/30 text-brand-gold border border-brand-gold/40',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1',
        'text-[10px] font-medium uppercase tracking-[0.1em]',
        'rounded-sm',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
