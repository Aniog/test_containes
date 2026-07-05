function QuantitySelector({ value, onChange, dark = false }) {
  const shellClasses = dark
    ? 'border-velmora-cream/20 bg-velmora-cream/5 text-velmora-cream'
    : 'border-velmora-line bg-velmora-sand text-velmora-ink'

  return (
    <div
      className={`inline-flex items-center rounded-full border ${shellClasses}`}
      aria-label="Quantity selector"
    >
      <button
        type="button"
        className="h-11 w-11 rounded-full text-lg transition hover:bg-black/5"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        className="h-11 w-11 rounded-full text-lg transition hover:bg-black/5"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
