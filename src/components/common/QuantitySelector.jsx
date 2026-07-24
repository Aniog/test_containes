const QuantitySelector = ({ value, onDecrease, onIncrease, compact = false }) => (
  <div className={[ 'inline-flex items-center rounded-full border border-stone-300/20 bg-stone-900/90 text-stone-50', compact ? 'gap-3 px-3 py-2 text-sm' : 'gap-4 px-4 py-3', ].join(' ')}>
    <button type="button" onClick={onDecrease} className="text-lg text-stone-300 transition hover:text-stone-50" aria-label="Decrease quantity">−</button>
    <span className="min-w-4 text-center text-sm font-medium">{value}</span>
    <button type="button" onClick={onIncrease} className="text-lg text-stone-300 transition hover:text-stone-50" aria-label="Increase quantity">+</button>
  </div>
)

export default QuantitySelector
