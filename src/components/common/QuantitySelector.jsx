const buttonClasses =
  'flex h-11 w-11 items-center justify-center rounded-full border border-velmora-mist/30 text-lg text-velmora-ink transition hover:border-velmora-bronze hover:text-velmora-bronze'

const QuantitySelector = ({ value, onChange }) => {
  return (
    <div className="inline-flex items-center rounded-full border border-velmora-mist/30 bg-velmora-parchment px-2 py-1 shadow-soft">
      <button
        type="button"
        className={buttonClasses}
        aria-label="Decrease quantity"
        onClick={() => onChange(value - 1)}
      >
        −
      </button>
      <span className="w-12 text-center text-sm font-medium text-velmora-ink">
        {value}
      </span>
      <button
        type="button"
        className={buttonClasses}
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
