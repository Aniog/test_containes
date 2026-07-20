import { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Sheet({ open, onClose, children, className, title = 'Drawer' }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label={title}>
      <div
        className="absolute inset-0 bg-velmora-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div
        className={cn(
          'absolute right-0 top-0 h-full w-full max-w-md transform bg-velmora-ivory shadow-2xl transition-transform duration-500 ease-out',
          className,
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-velmora-taupe/60 px-6 py-4">
            <h2 className="font-serif text-2xl">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 text-velmora-stone transition-colors hover:text-velmora-charcoal"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
