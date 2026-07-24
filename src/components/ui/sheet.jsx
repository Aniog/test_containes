import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const SheetContext = React.createContext(null)

function Sheet({ children, open, onOpenChange }) {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  )
}

function SheetTrigger({ children, asChild }) {
  const { onOpenChange } = React.useContext(SheetContext)
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: () => onOpenChange?.(true) })
  }
  return <button onClick={() => onOpenChange?.(true)}>{children}</button>
}

function SheetContent({ children, className, side = "right" }) {
  const { open, onOpenChange } = React.useContext(SheetContext)
  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-base/40 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange?.(false)}
      />
      <div
        className={cn(
          "fixed z-50 bg-surface shadow-xl transition-transform duration-300 ease-in-out",
          side === "right" && "inset-y-0 right-0 h-full w-full max-w-md translate-x-0",
          side === "left" && "inset-y-0 left-0 h-full w-full max-w-md translate-x-0",
          side === "top" && "inset-x-0 top-0 h-auto max-h-[80vh] translate-y-0",
          side === "bottom" && "inset-x-0 bottom-0 h-auto max-h-[80vh] translate-y-0",
          className
        )}
      >
        <button
          onClick={() => onOpenChange?.(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-surface transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
        {children}
      </div>
    </>
  )
}

function SheetHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
  )
}

function SheetTitle({ className, ...props }) {
  return (
    <h2 className={cn("text-lg font-semibold text-base", className)} {...props} />
  )
}

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle }
