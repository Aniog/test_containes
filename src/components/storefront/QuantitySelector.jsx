const QuantitySelector = ({ value, onDecrease, onIncrease, compact = false }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-[#d7c3ab] bg-white/90 ${compact ? 'gap-3 px-3 py-1.5' : 'gap-5 px-4 py-3'}`}
      aria-label="Quantity selector"
    >
      <button
        type="button"
        onClick={onDecrease}
        className="text-base text-[#6f5946] transition hover:text-[#241a13]"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className={`min-w-4 text-center text-[#241a13] ${compact ? 'text-sm' : 'text-base'}`}>
        {value}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        className="text-base text-[#6f5946] transition hover:text-[#241a13]"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
