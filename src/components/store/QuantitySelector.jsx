function QuantitySelector({ value, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-mist bg-porcelain p-1 shadow-card">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-sand"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-ink">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition hover:bg-sand"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
