import { useEffect } from 'react'
import { X } from 'lucide-react'

export default function Drawer({ isOpen, onClose, title, children, position = 'right' }) {
  useEffect(() => {
    if (!isOpen) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-overlay backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`absolute top-0 h-full w-full max-w-md bg-surface shadow-2xl ${
          position === 'right' ? 'right-0' : 'left-0'
        } animate-slide-in-right`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-muted-subtle/30 px-6 py-4">
            <h2 className="font-serif text-lg uppercase tracking-widest-custom">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 text-muted transition-colors hover:text-foreground"
              aria-label="Close drawer"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">{children}</div>
        </div>
      </div>
    </div>
  )
}
