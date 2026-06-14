import { useState, useEffect } from "react"

let toastState = {
  toasts: [],
  listeners: new Set(),
}

function notify() {
  toastState.listeners.forEach((listener) => listener(toastState.toasts))
}

export function toast(message, options = {}) {
  const id = Math.random().toString(36).slice(2, 9)
  const newToast = {
    id,
    message,
    ...options,
  }

  toastState.toasts = [...toastState.toasts, newToast]
  notify()

  if (options.duration !== Infinity) {
    setTimeout(() => {
      dismiss(id)
    }, options.duration || 3000)
  }

  return id
}

function dismiss(id) {
  toastState.toasts = toastState.toasts.filter((t) => t.id !== id)
  notify()
}

export function Toaster() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const listener = (newToasts) => setToasts([...newToasts])
    toastState.listeners.add(listener)
    return () => toastState.listeners.delete(listener)
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "rounded-md border border-slate-200 bg-white px-4 py-3 shadow-lg text-sm text-slate-900",
            t.variant === "destructive" && "border-red-200 bg-red-50 text-red-900"
          )}
        >
          {t.message}
          <button
            onClick={() => dismiss(t.id)}
            className="ml-4 text-slate-500 hover:text-slate-900"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}
