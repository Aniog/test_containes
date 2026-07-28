import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const Sheet = ({ open, onOpenChange, children }) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => onOpenChange?.(false)}
        aria-hidden="true"
      />
      <div className="relative z-10 h-full w-[300px] max-w-full bg-white shadow-xl animate-in slide-in-from-right duration-200">
        {children}
      </div>
    </div>
  )
}

const SheetContent = ({ children, className }) => (
  <div className={cn("flex h-full flex-col", className)}>{children}</div>
)

const SheetHeader = ({ children, className }) => (
  <div className={cn("flex items-center justify-between border-b border-gray-200 px-5 py-4", className)}>
    {children}
  </div>
)

const SheetTitle = ({ children, className }) => (
  <h2 className={cn("text-lg font-semibold text-gray-900", className)}>{children}</h2>
)

const SheetClose = ({ onClick, className }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn("rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900", className)}
    aria-label="Close"
  >
    <X className="h-5 w-5" />
  </button>
)

const SheetBody = ({ children, className }) => (
  <div className={cn("flex-1 overflow-auto p-5", className)}>{children}</div>
)

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetBody }
