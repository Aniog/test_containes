export default function QuantitySelector({ value, onChange }) {
  return (
    <div className="inline-flex items-center rounded-full border border-[var(--color-line-dark)] bg-[var(--color-surface)] text-[var(--color-text-dark)]">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="px-4 py-3 text-sm text-[var(--color-text-dark)] transition hover:text-[var(--color-accent)]"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        −
      </button>
      <span className="min-w-10 text-center text-sm">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="px-4 py-3 text-sm text-[var(--color-text-dark)] transition hover:text-[var(--color-accent)]"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  )
}
