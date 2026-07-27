import * as React from "react"
import { cn } from "@/lib/utils"

const Sheet = ({ children, open, onOpenChange, side = "right" }) => {
  if (!open) return null
  const sideClasses = {
    right: "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l",
    left: "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r",
    top: "inset-x-0 top-0 w-full h-auto border-b",
    bottom: "inset-x-0 bottom-0 w-full h-auto border-t",
  }
  return (
    <div className="fixed inset-0 z-50" onClick={() => onOpenChange?.(false)}>
      <div className="fixed inset-0 bg-black/80" />
      <div
        className={cn("fixed bg-background p-6 shadow-lg", sideClasses[side])}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onOpenChange?.(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

const SheetHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-2", className)} {...props} />
)

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("text-lg font-semibold", className)} {...props} />
))
SheetTitle.displayName = "SheetTitle"

export { Sheet, SheetHeader, SheetTitle }
