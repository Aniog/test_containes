import React, { createContext, useContext, useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const SheetContext = createContext({})

const Sheet = ({ open, onOpenChange, children }) => {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => onOpenChange(false)} />
          {children}
        </div>
      )}
    </SheetContext.Provider>
  )
}

const SheetContent = ({ side = 'right', className, children }) => {
  const positions = {
    right: 'right-0 top-0 h-full w-full max-w-md border-l',
    left: 'left-0 top-0 h-full w-full max-w-md border-r',
    bottom: 'bottom-0 left-0 right-0 border-t',
  }
  return (
    <div
      className={cn(
        'absolute bg-white shadow-lift transition-transform duration-300 ease-out',
        positions[side],
        className
      )}
    >
      <div className="flex h-full flex-col">{children}</div>
    </div>
  )
}

const SheetHeader = ({ children, className }) => (
  <div className={cn('flex items-center justify-between border-b border-brand-line px-6 py-4', className)}>
    {children}
  </div>
)

const SheetTitle = ({ children }) => <h2 className="font-serif text-xl text-brand-ink">{children}</h2>

const SheetClose = ({ onOpenChange }) => (
  <button onClick={() => onOpenChange(false)} className="rounded-full p-2 text-brand-muted hover:text-brand-ink">
    <X className="h-5 w-5" />
  </button>
)

const SheetBody = ({ children, className }) => <div className={cn('flex-1 overflow-y-auto px-6 py-4', className)}>{children}</div>

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetBody }
