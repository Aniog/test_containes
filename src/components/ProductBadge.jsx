import { cn } from '@/lib/utils';

const badgeStyles = {
  Bestseller: 'bg-gold text-white',
  New: 'bg-charcoal text-white',
  Limited: 'bg-warm-gray text-white',
  'Gift Set': 'bg-gold-dark text-white',
};

export default function ProductBadge({ label }) {
  if (!label) return null;
  return (
    <span
      className={cn(
        'absolute top-3 left-3 z-10 px-2.5 py-1 text-[10px] font-sans font-semibold uppercase tracking-widest rounded-sm',
        badgeStyles[label] || 'bg-charcoal text-white'
      )}
    >
      {label}
    </span>
  );
}
