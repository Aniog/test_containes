import { Minus, Plus } from 'lucide-react'

const QuantitySelector = ({ value, onChange, theme = 'light' }) => {
  const isDark = theme === 'dark'
  const shellClass = isDark
    ? 'border-white/15 bg-white/5 text-velmora-ivory'
    : 'border-velmora-line bg-white text-velmora-ink'
  const buttonClass = isDark ? 'hover:bg-white/10' : 'hover:bg-velmora-cream'

  return (
    <div className={`flex w-fit items-center rounded-full border ${shellClass}`}>
      <button
        type="button"
        aria-label="Decrease quantity"
        className={`rounded-full px-3 py-2 transition-all duration-300 ${buttonClass}`}
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-10 text-center text-sm font-medium">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className={`rounded-full px-3 py-2 transition-all duration-300 ${buttonClass}`}
        onClick={() => onChange(value + 1)}
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

export default QuantitySelector
