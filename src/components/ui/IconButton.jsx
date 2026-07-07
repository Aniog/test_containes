import React from 'react'
import { cn } from '@/lib/utils'

export function IconButton({ children, className, badge, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        'relative p-2 text-current hover:text-velmora-gold transition-colors duration-300',
        className
      )}
      {...props}
    >
      {children}
      {badge ? (
        <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-charcoal">
          {badge}
        </span>
      ) : null}
    </button>
  )
}
