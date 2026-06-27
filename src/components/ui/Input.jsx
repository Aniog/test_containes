import { cn } from '@/lib/utils'

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full px-4 py-3 text-sm bg-transparent border border-velmora-light',
        'text-velmora-charcoal placeholder:text-velmora-stone',
        'focus:outline-none focus:border-velmora-gold transition-colors duration-200',
        className
      )}
      {...props}
    />
  )
}
