const QuantitySelector = ({ value, onChange, compact = false }) => {
  const baseClasses = compact ? 'h-9 w-9 text-sm' : 'h-11 w-11 text-base'

  return (
    <div className="inline-flex items-center border border-[var(--color-border-subtle)] bg-white/80 text-[var(--color-text-primary)]">
      <button
        type="button"
        className={`${baseClasses} transition hover:bg-[var(--color-surface-strong)]`}
        onClick={() => onChange(value - 1)}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="flex h-9 min-w-10 items-center justify-center px-3 text-sm uppercase tracking-[0.2em] md:h-11 md:min-w-12">
        {value}
      </span>
      <button
        type="button"
        className={`${baseClasses} transition hover:bg-[var(--color-surface-strong)]`}
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
