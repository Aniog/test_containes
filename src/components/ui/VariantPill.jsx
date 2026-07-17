import { cn } from '@/lib/utils'

export default function VariantPill({ variant, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border text-xs tracking-widest2 uppercase font-medium transition-all duration-300',
        selected
          ? 'border-espresso bg-espresso text-cream'
          : 'border-taupe text-espresso/80 hover:border-espresso/60 hover:text-espresso bg-cream'
      )}
      aria-pressed={selected}
    >
      <span
        className={cn(
          'block w-3.5 h-3.5 rounded-full border',
          selected ? 'border-cream/30' : 'border-espresso/15'
        )}
        style={{ backgroundColor: variant.swatch }}
        aria-hidden="true"
      />
      {variant.label}
    </button>
  )
}
