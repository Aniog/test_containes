function QuantitySelector({ value, onChange, light = false }) {
  const buttonClass = light
    ? 'border-line-inverse text-ivory hover:border-champagne hover:text-champagne'
    : 'border-line text-ink hover:border-champagne hover:text-champagne-deep'

  return (
    <div
      className={[
        'inline-flex items-center rounded-full border px-2 py-1',
        light ? 'border-line-inverse bg-velvet-soft/60' : 'border-line bg-pearl',
      ].join(' ')}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        className={[
          'h-9 w-9 rounded-full border bg-transparent text-lg transition duration-300',
          buttonClass,
        ].join(' ')}
        onClick={() => onChange(value - 1)}
      >
        −
      </button>
      <span className={light ? 'min-w-10 text-center text-sm text-ivory' : 'min-w-10 text-center text-sm text-ink'}>
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        className={[
          'h-9 w-9 rounded-full border bg-transparent text-lg transition duration-300',
          buttonClass,
        ].join(' ')}
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  )
}

export default QuantitySelector
