export default function QuantitySelector({ value, onChange, label = 'Quantity' }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-sage">
        {label}
      </span>
      <div className="flex items-center overflow-hidden rounded-full border border-velmora-linen bg-velmora-porcelain text-velmora-espresso">
        <button
          type="button"
          className="px-4 py-2 text-lg transition hover:bg-velmora-cream"
          onClick={() => onChange(Math.max(1, value - 1))}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="min-w-10 text-center text-sm font-bold">{value}</span>
        <button
          type="button"
          className="px-4 py-2 text-lg transition hover:bg-velmora-cream"
          onClick={() => onChange(value + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  )
}
