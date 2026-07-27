import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const Sheet = ({ open, onOpenChange, children }) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-slate-950/50"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      {children}
    </div>
  )
}

const SheetContent = React.forwardRef(({ className, children, side = "right", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-0 h-full w-[300px] max-w-full bg-white shadow-xl p-6 outline-none",
        side === "right" ? "right-0" : "left-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
SheetContent.displayName = "SheetContent"

const SheetHeader = ({ className, children, ...props }) => (
  <div className={cn("flex items-start justify-between mb-6", className)} {...props}>
    {children}
  </div>
)

const SheetTitle = ({ className, children, ...props }) => (
  <h2 className={cn("text-lg font-semibold text-slate-900", className)} {...props}>
    {children}
  </h2>
)

const SheetClose = ({ onClick }) => (
  <button
    onClick={onClick}
    className="rounded-md p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
    aria-label="Close"
  >
    <X className="h-5 w-5" />
  </button>
)

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose }
