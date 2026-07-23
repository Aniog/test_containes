import { cn } from '@/lib/utils'

const PRIORITY_STYLES = {
  high: 'text-red-600 bg-red-50 border-red-200',
  medium: 'text-amber-600 bg-amber-50 border-amber-200',
  low: 'text-emerald-600 bg-emerald-50 border-emerald-200',
}

export default function PriorityBadge({ priority }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border',
        PRIORITY_STYLES[priority] ?? PRIORITY_STYLES.medium
      )}
    >
      {priority}
    </span>
  )
}
