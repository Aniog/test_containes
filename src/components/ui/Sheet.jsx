import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sheet({ isOpen, onClose, children, side = "right", title }) {
  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-velmora-charcoal/40 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "fixed top-0 h-full bg-velmora-cream z-50 shadow-2xl flex flex-col max-w-full",
          side === "right" ? "right-0" : "left-0",
          side === "right" ? "animate-in slide-in-from-right" : "animate-in slide-in-from-left"
        )}
        style={{ width: "min(100vw, 420px)" }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-stone/40">
          <h2 className="font-serif text-2xl text-velmora-espresso">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 text-velmora-mocha hover:text-velmora-espresso transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </>
  )
}
