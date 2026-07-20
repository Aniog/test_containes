const stepperButtonClassName =
  'flex h-10 w-10 items-center justify-center rounded-full border border-velmora-line text-lg text-velmora-ink transition duration-300 ease-velvet hover:border-velmora-gold hover:text-velmora-gold'

const QuantityStepper = ({ value, onChange }) => (
  <div className="inline-flex items-center gap-3 rounded-full bg-white px-2 py-2 shadow-soft">
    <button
      type="button"
      className={stepperButtonClassName}
      onClick={() => onChange(Math.max(1, value - 1))}
      aria-label="Decrease quantity"
    >
      −
    </button>
    <span className="min-w-8 text-center text-sm font-medium text-velmora-ink">{value}</span>
    <button
      type="button"
      className={stepperButtonClassName}
      onClick={() => onChange(value + 1)}
      aria-label="Increase quantity"
    >
      +
    </button>
  </div>
)

export default QuantityStepper
