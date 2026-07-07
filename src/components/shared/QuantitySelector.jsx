export default function QuantitySelector({ value, onChange, compact = false }) {
  const sizeClasses = compact ? 'h-10 w-10 text-sm' : 'h-11 w-11 text-base'

  return (
    <div className="inline-flex items-center rounded-full border border-mist bg-porcelain">
      <button
        type="button"
        className={`${sizeClasses} rounded-full bg-transparent text-espresso hover:bg-sand`}
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-semibold text-espresso">{value}</span>
      <button
        type="button"
        className={`${sizeClasses} rounded-full bg-transparent text-espresso hover:bg-sand`}
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}
