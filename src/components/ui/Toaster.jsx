import React, { createContext, useCallback, useContext, useState } from 'react'
import { CheckCircle2, AlertCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const ToastContext = createContext(null)

let toastSeq = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const dismiss = useCallback((id) => {
    setToasts((list) => list.filter((t) => t.id !== id))
  }, [])

  const push = useCallback((toast) => {
    const id = ++toastSeq
    const t = { id, tone: 'success', duration: 4500, ...toast }
    setToasts((list) => [...list, t])
    if (t.duration > 0) {
      setTimeout(() => dismiss(id), t.duration)
    }
    return id
  }, [dismiss])

  const value = {
    success: (title, description) => push({ tone: 'success', title, description }),
    error: (title, description) => push({ tone: 'error', title, description }),
    info: (title, description) => push({ tone: 'info', title, description }),
    dismiss,
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex flex-col items-center gap-2 px-4 sm:bottom-8">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={cn(
              'pointer-events-auto w-full max-w-sm rounded-xl border border-line bg-surface/95 backdrop-blur shadow-lift',
              'px-4 py-3 flex items-start gap-3'
            )}
          >
            {t.tone === 'success' && (
              <CheckCircle2 className="h-5 w-5 mt-0.5 text-accent-strong shrink-0" />
            )}
            {t.tone === 'error' && (
              <AlertCircle className="h-5 w-5 mt-0.5 text-red-600 shrink-0" />
            )}
            {t.tone === 'info' && (
              <AlertCircle className="h-5 w-5 mt-0.5 text-ink shrink-0" />
            )}
            <div className="flex-1 min-w-0">
              {t.title && (
                <p className="text-sm font-medium text-ink">{t.title}</p>
              )}
              {t.description && (
                <p className="text-sm text-muted mt-0.5">{t.description}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => dismiss(t.id)}
              className="text-muted hover:text-ink transition-colors"
              aria-label="Dismiss"
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
  const ctx = useContext(ToastContext)
  if (!ctx) {
    return {
      success: (t, d) => console.log('[toast]', t, d),
      error: (t, d) => console.error('[toast]', t, d),
      info: (t, d) => console.log('[toast]', t, d),
      dismiss: () => {},
    }
  }
  return ctx
}
