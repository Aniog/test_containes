import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sheet({ open, onClose, children, side = "right" }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-slate-900/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative z-10 h-full w-80 max-w-full bg-white shadow-xl",
          side === "right" ? "ml-auto" : "mr-auto"
        )}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded p-2 text-slate-500 hover:bg-slate-100"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-6 pt-16">{children}</div>
      </div>
    </div>
  )
}
