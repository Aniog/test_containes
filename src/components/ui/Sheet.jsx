import * as React from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

export function Sheet({ open, onOpenChange, children, side = 'right' }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange?.(false)}
      />
      <div
        className={cn(
          'absolute top-0 h-full w-full max-w-md bg-card shadow-2xl transition-transform',
          side === 'right' && 'right-0 animate-slide-in-right'
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function SheetContent({ children, className }) {
  return <div className={cn('flex h-full flex-col', className)}>{children}</div>
}

export function SheetHeader({ children, className }) {
  return <div className={cn('flex items-center justify-between border-b border-border p-6', className)}>{children}</div>
}

export function SheetTitle({ children }) {
  return <h2 className="font-serif text-xl tracking-wide">{children}</h2>
}

export function SheetClose({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>
  )
}

export function SheetBody({ children, className }) {
  return <div className={cn('flex-1 overflow-y-auto p-6', className)}>{children}</div>
}

export function SheetFooter({ children, className }) {
  return <div className={cn('border-t border-border p-6', className)}>{children}</div>
}
