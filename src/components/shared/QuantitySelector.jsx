const QuantitySelector = ({ value, onDecrease, onIncrease }) => {
  return (
    <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-ivory text-velmora-ink shadow-soft">
      <button
        type="button"
        onClick={onDecrease}
        className="h-11 w-11 rounded-l-full text-lg text-velmora-ink transition hover:bg-velmora-champagne"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium uppercase tracking-[0.2em] text-velmora-ink">
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className="h-11 w-11 rounded-r-full text-lg text-velmora-ink transition hover:bg-velmora-champagne"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
