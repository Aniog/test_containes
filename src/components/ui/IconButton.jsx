import { cn } from '@/lib/utils'

export function IconButton({ children, className, badge, ...props }) {
  return (
    <button
      className={cn(
        'relative p-2 rounded-full text-espresso-900 transition-colors hover:bg-cream-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
        className
      )}
      {...props}
    >
      {children}
      {badge ? (
        <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-espresso-900">
          {badge}
        </span>
      ) : null}
    </button>
  )
}
