import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Select({ value, onChange, options, label }) {
  return (
    <div className="relative">
      {label && (
        <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-warm-gray">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            'w-full appearance-none border border-hairline bg-white px-4 py-3 pr-10 text-sm text-espresso',
            'focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold'
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-gray" />
      </div>
    </div>
  )
}
