import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Select({ value, onChange, options, className, label, ...props }) {
  return (
    <div className={cn('relative', className)}>
      {label && (
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-vel-muted">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none border border-vel-border bg-transparent px-4 py-2.5 pr-10 text-sm text-vel-base focus:border-vel-accent focus:outline-none focus:ring-1 focus:ring-vel-accent/30"
          aria-label={label ? undefined : props['aria-label']}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-vel-muted" />
      </div>
    </div>
  )
}
