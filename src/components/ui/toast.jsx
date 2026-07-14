import React, { createContext, useContext, useState, useCallback } from "react"
import { cn } from "@/lib/utils"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = useCallback(({ title, description, variant = "default" }) => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, title, description, variant }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 4000)
  }, [])

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const icons = {
    default: <Info className="w-5 h-5 text-indigo-600" />,
    success: <CheckCircle className="w-5 h-5 text-green-600" />,
    destructive: <AlertCircle className="w-5 h-5 text-red-600" />,
  }

  const styles = {
    default: "border-indigo-200 bg-white",
    success: "border-green-200 bg-white",
    destructive: "border-red-200 bg-white",
  }

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-80">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "flex items-start gap-3 rounded-xl border p-4 shadow-lg animate-in slide-in-from-right-5",
              styles[t.variant] || styles.default
            )}
          >
            <div className="mt-0.5">{icons[t.variant] || icons.default}</div>
            <div className="flex-1 min-w-0">
              {t.title && <p className="text-sm font-semibold text-gray-900">{t.title}</p>}
              {t.description && <p className="text-sm text-gray-600 mt-0.5">{t.description}</p>}
            </div>
            <button
              onClick={() => dismiss(t.id)}
              className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within ToastProvider")
  return ctx
}
