import { cn } from '@/lib/utils'

export default function Badge({ children, className, variant = 'default' }) {
  const variants = {
    default: 'bg-slate-100 text-slate-700',
    brand: 'bg-brand-50 text-brand-700',
    accent: 'bg-amber-50 text-amber-700',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold',
        variants[variant] || variants.default,
        className,
      )}
    >
      {children}
    </span>
  )
}
