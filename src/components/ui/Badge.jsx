import { cn } from '@/lib/utils'

export default function Badge({ children, className, variant = 'amber' }) {
  const variants = {
    amber: 'bg-amber/10 text-amber',
    accent: 'bg-accent/10 text-accent',
    brand: 'bg-brand/10 text-brand',
    slate: 'bg-slate-100 text-ink-muted',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
