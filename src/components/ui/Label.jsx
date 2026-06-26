import { cn } from '@/lib/utils'

export function Label({ children, className, ...props }) {
  return (
    <label
      className={cn('block text-sm font-medium text-slate-700 mb-1', className)}
      {...props}
    >
      {children}
    </label>
  )
}
