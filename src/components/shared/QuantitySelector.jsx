function QuantitySelector({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="inline-flex items-center rounded-full border border-stone-300 bg-stone-50 text-stone-900">
      <button
        type="button"
        onClick={onDecrease}
        className="rounded-l-full px-4 py-3 text-sm text-stone-700 transition hover:bg-stone-100"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-12 text-center text-sm font-medium">{quantity}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="rounded-r-full px-4 py-3 text-sm text-stone-700 transition hover:bg-stone-100"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
