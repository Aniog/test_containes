import Button from '@/components/ui/Button'

const QuantitySelector = ({ value, onChange }) => {
  const setValue = (next) => onChange(Math.max(1, next))

  return (
    <div className="flex items-center rounded-full border border-stone-300 bg-white">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-11 w-11 rounded-full px-0 tracking-normal"
        onClick={() => setValue(value - 1)}
        aria-label="Decrease quantity"
      >
        −
      </Button>
      <span className="min-w-10 text-center text-sm text-stone-900">{value}</span>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-11 w-11 rounded-full px-0 tracking-normal"
        onClick={() => setValue(value + 1)}
        aria-label="Increase quantity"
      >
        +
      </Button>
    </div>
  )
}

export default QuantitySelector
