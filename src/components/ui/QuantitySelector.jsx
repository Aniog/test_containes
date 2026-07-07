const baseButtonClass =
  'flex h-11 w-11 items-center justify-center rounded-full border border-line-dark text-lg text-ivory transition-all duration-300 ease-luxe hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40'

const QuantitySelector = ({ value, onChange, min = 1 }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className={baseButtonClass}
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-8 text-center text-sm uppercase tracking-[0.28em] text-ivory">
        {value}
      </span>
      <button
        type="button"
        className={baseButtonClass}
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
