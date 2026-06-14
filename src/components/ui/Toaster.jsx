import * as React from "react"
import { cn } from "@/lib/utils"

const ToastContext = React.createContext(null)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const dismiss = React.useCallback((id) => {
    setToasts((current) => current.filter((t) => t.id !== id))
  }, [])

  const push = React.useCallback(
    ({ title, description, variant = "default" }) => {
      const id = Math.random().toString(36).slice(2)
      setToasts((current) => [...current, { id, title, description, variant }])
      setTimeout(() => dismiss(id), 4200)
      return id
    },
    [dismiss]
  )

  const value = React.useMemo(
    () => ({
      toast: push,
      success: (t) => push({ ...t, variant: "success" }),
      error: (t) => push({ ...t, variant: "error" }),
    }),
    [push]
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 w-[360px] max-w-[calc(100vw-2rem)]">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={cn(
              "rounded-md border bg-slate-850 p-4 shadow-lg backdrop-blur",
              t.variant === "success" && "border-copper-500/60",
              t.variant === "error" && "border-red-500/60",
              t.variant === "default" && "border-line"
            )}
          >
            {t.title && (
              <p className="text-sm font-semibold text-text">{t.title}</p>
            )}
            {t.description && (
              <p className="mt-1 text-sm text-text-muted">{t.description}</p>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>")
  return ctx
}
