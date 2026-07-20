import { cn } from '@/lib/utils'

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full border-b border-velmora-charcoal bg-transparent px-0 py-3 text-sm text-velmora-charcoal placeholder:text-velmora-stone/70 focus:border-velmora-gold focus:outline-none',
        className,
      )}
      {...props}
    />
  )
}
