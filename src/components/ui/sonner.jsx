import * as React from "react"
import { cn } from "@/lib/utils"

const ToastContext = React.createContext(null)

export function Toaster({ children }) {
  const [toasts, setToasts] = React.useState([])

  const toast = React.useCallback((message, options = {}) => {
    const id = Math.random().toString(36).slice(2)
    setToasts((prev) => [...prev, { id, message, type: options.type || "default" }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, options.duration || 4000)
  }, [])

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "rounded-lg px-4 py-3 shadow-lg text-sm font-medium text-white min-w-[240px]",
              t.type === "success" ? "bg-teal" : t.type === "error" ? "bg-red-600" : "bg-slate-900"
            )}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within Toaster")
  return ctx
}
