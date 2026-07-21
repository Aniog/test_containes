import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export function Sheet({ open, onClose, children, side = 'right', className }) {
  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-40 bg-espresso/30 backdrop-blur-sm transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'fixed top-0 z-50 h-full w-full max-w-md bg-cream shadow-soft transition-transform duration-300 ease-lux',
          side === 'right' ? 'right-0 translate-x-full' : 'left-0 -translate-x-full',
          open && 'translate-x-0',
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </>
  )
}

export function SheetHeader({ children, className }) {
  return <div className={cn('flex items-center justify-between border-b border-champagne px-6 py-5', className)}>{children}</div>
}

export function SheetTitle({ children, className }) {
  return <h2 className={cn('font-serif text-2xl tracking-wide text-espresso', className)}>{children}</h2>
}

export const SheetBody = forwardRef(function SheetBody({ children, className }, ref) {
  return (
    <div ref={ref} className={cn('flex-1 overflow-y-auto px-6 py-6', className)}>
      {children}
    </div>
  )
})

export function SheetFooter({ children, className }) {
  return <div className={cn('border-t border-champagne px-6 py-5', className)}>{children}</div>
}
