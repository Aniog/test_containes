const QuantitySelector = ({ value, onChange, tone = 'light' }) => {
  const baseClasses =
    tone === 'dark'
      ? 'border-hairline-dark bg-base text-foreground'
      : 'border-hairline-light bg-surface text-ink'

  return (
    <div className={`inline-flex items-center rounded-full border ${baseClasses}`}>
      <button
        type="button"
        className="h-11 w-11 rounded-full border-0 bg-transparent text-lg transition hover:text-accent"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        className="h-11 w-11 rounded-full border-0 bg-transparent text-lg transition hover:text-accent"
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
