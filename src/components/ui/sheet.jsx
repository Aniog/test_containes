import * as React from "react"
import { cn } from "@/lib/utils"

const Sheet = ({ open, onOpenChange, children, side = "right" }) => {
  if (!open) return null

  const sideClasses = {
    right: "right-0",
    left: "left-0",
    top: "top-0",
    bottom: "bottom-0",
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => onOpenChange(false)}
      />
      {/* Panel */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 w-full max-w-md bg-white shadow-xl transition-transform duration-300 ease-out",
          sideClasses[side]
        )}
      >
        {children}
      </div>
    </div>
  )
}

const SheetHeader = ({ className, children, ...props }) => (
  <div className={cn("flex flex-col space-y-2 p-6 border-b border-borderwarm", className)} {...props}>
    {children}
  </div>
)

const SheetTitle = ({ className, children, ...props }) => (
  <h3 className={cn("font-serif text-lg tracking-product uppercase text-charcoal", className)} {...props}>
    {children}
  </h3>
)

const SheetContent = ({ className, children, ...props }) => (
  <div className={cn("flex-1 overflow-y-auto p-6", className)} {...props}>
    {children}
  </div>
)

const SheetFooter = ({ className, children, ...props }) => (
  <div className={cn("border-t border-borderwarm p-6", className)} {...props}>
    {children}
  </div>
)

export { Sheet, SheetHeader, SheetTitle, SheetContent, SheetFooter }
