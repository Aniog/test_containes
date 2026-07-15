import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { CheckCircle2, X } from 'lucide-react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    setToasts((current) => [...current, { id, message }])
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id))
    }, 2800)
  }, [])

  const dismissToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const value = useMemo(
    () => ({ showToast }),
    [showToast],
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 top-4 z-[80] flex flex-col items-center gap-3 px-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex w-full max-w-sm items-center justify-between gap-3 rounded-full border border-velmora-line/70 bg-velmora-ivory/95 px-4 py-3 text-sm text-velmora-ink shadow-[0_16px_50px_rgba(31,23,21,0.12)] backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-velmora-gold" />
              <span>{toast.message}</span>
            </div>
            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              className="rounded-full border border-transparent p-1 text-velmora-mist transition hover:border-velmora-line hover:text-velmora-ink"
              aria-label="Dismiss notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }

  return context
}
