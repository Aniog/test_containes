import { cn } from '@/lib/utils'

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 text-[10px] font-sans font-medium tracking-widest uppercase bg-velmora-dark text-velmora-cream',
        className
      )}
    >
      {children}
    </span>
  )
}
