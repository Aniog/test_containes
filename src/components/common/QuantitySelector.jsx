const QuantitySelector = ({ value, onDecrease, onIncrease }) => {
  return (
    <div className="inline-flex items-center rounded-full border border-line bg-ivory text-ink">
      <button
        type="button"
        onClick={onDecrease}
        className="h-11 w-11 rounded-full border-none bg-transparent px-0 text-xl text-ink transition hover:bg-sand"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium text-ink">{value}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="h-11 w-11 rounded-full border-none bg-transparent px-0 text-xl text-ink transition hover:bg-sand"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
