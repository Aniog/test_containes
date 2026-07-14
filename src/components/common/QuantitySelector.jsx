const QuantitySelector = ({ value, onChange }) => {
  return (
    <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-cream text-velmora-ink">
      <button
        type="button"
        className="h-11 w-11 rounded-l-full border-r border-velmora-line bg-transparent text-lg transition hover:bg-velmora-soft"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-12 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        className="h-11 w-11 rounded-r-full border-l border-velmora-line bg-transparent text-lg transition hover:bg-velmora-soft"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
