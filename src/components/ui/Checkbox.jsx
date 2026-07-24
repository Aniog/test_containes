import * as React from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

export function Checkbox({ id, checked, onCheckedChange, label }) {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-3 py-2 text-sm text-foreground">
      <span
        className={cn(
          'flex h-5 w-5 items-center justify-center rounded border transition-colors',
          checked ? 'border-accent bg-accent text-white' : 'border-input bg-card'
        )}
      >
        {checked && <Check className="h-3.5 w-3.5" />}
      </span>
      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
      />
      {label}
    </label>
  )
}
