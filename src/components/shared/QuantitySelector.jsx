function QuantitySelector({ value, onDecrease, onIncrease, compact = false }) {
  const sizeClasses = compact ? 'h-9 px-3 text-sm' : 'h-11 px-4 text-base'

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-surface text-ink">
      <button
        aria-label="Decrease quantity"
        className={`${sizeClasses} rounded-l-full text-muted transition hover:text-ink`}
        onClick={onDecrease}
        type="button"
      >
        −
      </button>
      <span className={`min-w-10 text-center font-medium ${sizeClasses}`}>
        {value}
      </span>
      <button
        aria-label="Increase quantity"
        className={`${sizeClasses} rounded-r-full text-muted transition hover:text-ink`}
        onClick={onIncrease}
        type="button"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
