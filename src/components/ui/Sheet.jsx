import { useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Sheet({ open, onClose, children, className }) {
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      const onKey = (e) => {
        if (e.key === 'Escape') onClose()
      }
      document.addEventListener('keydown', onKey)
      return () => {
        document.body.style.overflow = original
        document.removeEventListener('keydown', onKey)
      }
    }
  }, [open, onClose])

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      )}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-vel-base/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          'absolute right-0 top-0 h-full w-full max-w-md bg-vel-card shadow-soft-lg transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  )
}
