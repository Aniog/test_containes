export default function QuantitySelector({ value, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-stone-300 bg-white text-stone-900 shadow-sm">
      <button
        type="button"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="h-11 w-11 rounded-l-full border-r border-stone-200 bg-white text-lg text-stone-900 transition hover:bg-stone-100"
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="h-11 w-11 rounded-r-full border-l border-stone-200 bg-white text-lg text-stone-900 transition hover:bg-stone-100"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}
