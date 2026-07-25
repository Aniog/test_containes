function QuantitySelector({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="inline-flex items-center rounded-full border border-mist bg-glow">
      <button
        type="button"
        onClick={onDecrease}
        className="rounded-l-full px-4 py-2 text-sm text-ink transition-colors duration-300 ease-editorial hover:bg-shell"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-ink">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="rounded-r-full px-4 py-2 text-sm text-ink transition-colors duration-300 ease-editorial hover:bg-shell"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
