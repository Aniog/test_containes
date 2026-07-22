export function PriceRange({ min, max, value, onChange }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-warm-gray">${min}</span>
        <span className="font-medium text-espresso">${value}</span>
        <span className="text-warm-gray">${max}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1 w-full cursor-pointer appearance-none rounded bg-hairline accent-gold"
      />
    </div>
  )
}
