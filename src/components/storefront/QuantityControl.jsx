import { Minus, Plus } from 'lucide-react'

const QuantityControl = ({ value, onChange, size = 'default' }) => {
  const buttonClass =
    size === 'compact'
      ? 'h-8 w-8'
      : 'h-10 w-10'

  return (
    <div className="inline-flex items-center rounded-full border border-sand bg-ivory text-obsidian">
      <button
        type="button"
        className={`${buttonClass} rounded-full bg-transparent p-0 text-obsidian hover:bg-mist`}
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        <Minus className="mx-auto h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        className={`${buttonClass} rounded-full bg-transparent p-0 text-obsidian hover:bg-mist`}
        onClick={() => onChange(value + 1)}
        aria-label="Increase quantity"
      >
        <Plus className="mx-auto h-4 w-4" />
      </button>
    </div>
  )
}

export default QuantityControl
