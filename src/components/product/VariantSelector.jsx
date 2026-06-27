import { cn } from '@/lib/utils';

export default function VariantSelector({ variants, selected, onSelect }) {
  if (!variants || variants.length === 0) return null;
  
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-[var(--color-primary)]">
        Finish
      </label>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant}
            onClick={() => onSelect(variant)}
            className={cn(
              'px-4 py-2 text-sm border rounded-full transition-all duration-200',
              selected === variant
                ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
                : 'border-[var(--color-border)] text-[var(--color-primary)] hover:border-[var(--color-accent)]'
            )}
          >
            {variant}
          </button>
        ))}
      </div>
    </div>
  );
}
