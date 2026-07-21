import { cn } from '@/lib/utils'

export function IconButton({ className, children, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center rounded-full p-2 transition-colors duration-200 hover:bg-espresso/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
