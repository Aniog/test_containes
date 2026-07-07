import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Sheet = ({ open, onClose, children, side = "right", className }) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100]" aria-modal="true" role="dialog">
      <div
        className="absolute inset-0 bg-velmora-espresso/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute top-0 flex h-full w-full max-w-md flex-col bg-velmora-white shadow-2xl",
          side === "right" ? "right-0" : "left-0",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

const SheetHeader = ({ children, className, onClose }) => (
  <div
    className={cn(
      "flex items-center justify-between border-b border-velmora-border px-6 py-4",
      className
    )}
  >
    {children}
    {onClose && (
      <button
        type="button"
        onClick={onClose}
        className="rounded-full p-2 text-velmora-espresso transition-colors hover:bg-velmora-stone hover:text-velmora-gold"
        aria-label="Close"
      >
        <X className="h-5 w-5" />
      </button>
    )}
  </div>
)

const SheetBody = ({ children, className }) => (
  <div className={cn("flex-1 overflow-y-auto px-6 py-6", className)}>{children}</div>
)

const SheetFooter = ({ children, className }) => (
  <div className={cn("border-t border-velmora-border px-6 py-5", className)}>{children}</div>
)

export { Sheet, SheetHeader, SheetBody, SheetFooter }
