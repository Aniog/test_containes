export default function QuantitySelector({ value, onDecrease, onIncrease }) {
  return (
    <div className="flex h-12 items-center rounded-full border border-brand-line bg-brand-ivory px-2 text-brand-ink shadow-soft">
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-brand-ink transition hover:bg-brand-champagne"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="flex h-8 w-8 items-center justify-center rounded-full text-lg text-brand-ink transition hover:bg-brand-champagne"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}
