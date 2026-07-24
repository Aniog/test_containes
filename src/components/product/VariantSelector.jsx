import { cn } from '@/lib/utils'

export default function VariantSelector({ variants, selected, onSelect }) {
  return (
    <div className="space-y-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Tone
      </span>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => (
          <button
            key={variant}
            type="button"
            onClick={() => onSelect(variant)}
            className={cn(
              'rounded-full border px-5 py-2 text-sm font-medium capitalize transition-colors',
              selected === variant
                ? 'border-accent bg-accent text-white'
                : 'border-border bg-card text-foreground hover:border-accent'
            )}
          >
            {variant}
          </button>
        ))}
      </div>
    </div>
  )
}
