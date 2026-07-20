import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SortSelect({ value, onChange, options, className }) {
  return (
    <div className={cn('relative', className)}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-none border border-velmora-taupe bg-velmora-ivory py-2 pl-4 pr-10 text-sm text-velmora-charcoal focus:border-velmora-gold focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-stone" />
    </div>
  )
}
