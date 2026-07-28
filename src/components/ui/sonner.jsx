import * as React from "react"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border border-slate-200 p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
  {
    variants: {
      variant: {
        default: "border-slate-200 bg-white text-slate-900",
        destructive: "border-red-200 bg-red-50 text-red-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toastTimeouts = new Map()
const removeToast = (id) => {
  if (toastTimeouts.has(id)) {
    clearTimeout(toastTimeouts.get(id))
  }
}

const addToRemoveQueue = (toast) => {
  if (toast.duration === Infinity) {
    return toast.id
  }

  if (!toastTimeouts.has(toast.id)) {
    toastTimeouts.set(
      toast.id,
      setTimeout(() => {
        toastTimeouts.delete(toast.id)
        const event = new CustomEvent("toast-remove", { detail: toast.id })
        window.dispatchEvent(event)
      }, toast.duration || TOAST_REMOVE_DELAY)
    )
  }
  return toast.id
}

const listeners = new Set()
let memoryState = []
let toastId = 0

const toast = {
  toast: (props) => {
    const id = genId()
    const update = (props) => {
      memoryState = memoryState.map((t) => (t.id === id ? { ...t, ...props } : t))
      const event = new CustomEvent("toast-update", { detail: { id, props } })
      window.dispatchEvent(event)
    }
    const dismiss = () => {
      memoryState = memoryState.filter((t) => t.id !== id)
      const event = new CustomEvent("toast-dismiss", { detail: id })
      window.dispatchEvent(event)
    }

    const toastItem = {
      id,
      title: props.title,
      description: props.description,
      action: props.action,
      variant: props.variant || "default",
      duration: props.duration || 4000,
      onDismiss: dismiss,
      onUpdate: update,
    }

    memoryState = [...memoryState, toastItem]
    addToRemoveQueue(toastItem)
    const event = new CustomEvent("toast-add", { detail: toastItem })
    window.dispatchEvent(event)

    return {
      id: toastItem.id,
      dismiss,
      update,
    }
  },
  success: (title, description) => toast.toast({ title, description, variant: "default" }),
  error: (title, description) => toast.toast({ title, description, variant: "destructive" }),
}

function Toaster() {
  const [toasts, setToasts] = React.useState([])

  React.useEffect(() => {
    const handleAdd = (e) => {
      setToasts((current) => {
        const next = [...current, e.detail]
        if (next.length > TOAST_LIMIT) {
          return next.slice(next.length - TOAST_LIMIT)
        }
        return next
      })
    }

    const handleDismiss = (e) => {
      setToasts((current) => current.filter((t) => t.id !== e.detail))
    }

    const handleUpdate = (e) => {
      const { id, props } = e.detail
      setToasts((current) =>
        current.map((t) => (t.id === id ? { ...t, ...props } : t))
      )
    }

    window.addEventListener("toast-add", handleAdd)
    window.addEventListener("toast-dismiss", handleDismiss)
    window.addEventListener("toast-update", handleUpdate)

    return () => {
      window.removeEventListener("toast-add", handleAdd)
      window.removeEventListener("toast-dismiss", handleDismiss)
      window.removeEventListener("toast-update", handleUpdate)
    }
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(toastVariants({ variant: t.variant }), "min-w-[320px] max-w-sm")}
        >
          <div className="flex-1">
            {t.title && <div className="font-medium text-sm">{t.title}</div>}
            {t.description && (
              <div className="text-sm text-slate-500">{t.description}</div>
            )}
          </div>
          <button
            type="button"
            onClick={() => {
              t.onDismiss?.()
            }}
            className="rounded-md p-1 text-slate-500 hover:text-slate-900"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}

export { Toaster, toast }
