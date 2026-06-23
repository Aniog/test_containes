import { Minus, Plus } from 'lucide-react'

const QuantitySelector = ({ value, onChange }) => {
  return (
    <div className="flex items-center rounded-full border border-brand-line bg-brand-surface text-brand-espresso">
      <button type="button" onClick={() => onChange(Math.max(1, value - 1))} className="p-3">
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-12 text-center text-sm font-medium">{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} className="p-3">
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

export default QuantitySelector
