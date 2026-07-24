import { createContext, useCallback, useContext, useState } from 'react'
import { Check } from 'lucide-react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const toast = useCallback((message) => {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { id, message }])
    setTimeout(() => dismiss(id), 2600)
  }, [dismiss])

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-6 left-1/2 z-[100] flex -translate-x-1/2 flex-col items-center gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm text-cream-soft shadow-soft animate-fade-up"
          >
            <Check className="h-4 w-4 text-gold-light" />
            <span>{t.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
