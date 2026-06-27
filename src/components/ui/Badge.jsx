import { cn } from '@/lib/utils'

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-medium tracking-wide',
        'bg-velmora-gold/10 text-velmora-gold-dark',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
