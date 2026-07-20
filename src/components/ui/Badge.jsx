import { cn } from '@/lib/utils'

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center border border-velmora-taupe px-2 py-1 text-[10px] uppercase tracking-widest text-velmora-stone',
        className,
      )}
    >
      {children}
    </span>
  )
}
