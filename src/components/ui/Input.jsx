import { cn } from '@/lib/utils'

export function Input({ className, type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'w-full border border-vel-border bg-transparent px-4 py-3 text-sm text-vel-base placeholder:text-vel-muted focus:border-vel-accent focus:outline-none focus:ring-1 focus:ring-vel-accent/30 transition-colors',
        className
      )}
      {...props}
    />
  )
}
