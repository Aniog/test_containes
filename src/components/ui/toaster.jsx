import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { CheckCircle, AlertCircle, X } from "lucide-react"

const ToastContext = React.createContext(null)

export function Toaster({ children }) {
  const [toasts, setToasts] = React.useState([])

  const add = React.useCallback((message, type = "success") => {
    const id = Math.random().toString(36).slice(2)
    setToasts((t) => [...t, { id, message, type }])
    window.setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id))
    }, 5000)
  }, [])

  const remove = React.useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toast: add }}>
      {children}
      {createPortal(
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
          {toasts.map((t) => (
            <div
              key={t.id}
              className={cn(
                "flex items-start gap-3 rounded-lg border px-4 py-3 shadow-lg min-w-[280px] max-w-[360px] bg-white",
                t.type === "success" ? "border-emerald-200" : "border-red-200"
              )}
              role="status"
            >
              {t.type === "success" ? (
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 shrink-0" />
              )}
              <div className="flex-1 text-sm text-slate-800">{t.message}</div>
              <button onClick={() => remove(t.id)} className="text-slate-400 hover:text-slate-600">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used within Toaster")
  return ctx
}
