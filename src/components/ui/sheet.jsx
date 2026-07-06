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
  const ctx = React.useContext(SheetContext)

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: () => ctx?.onOpenChange?.(true),
    })
  }

  return (
    <button onClick={() => ctx?.onOpenChange?.(true)}>
      {children}
    </button>
  )
}

function SheetContent({ children, side = "right", className }) {
  const ctx = React.useContext(SheetContext)

  if (!ctx?.open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm"
        onClick={() => ctx?.onOpenChange?.(false)}
      />
      <div
        className={cn(
          "absolute top-0 h-full w-full max-w-md bg-cream shadow-2xl transition-transform duration-300",
          side === "right" ? "right-0" : "left-0",
          className
        )}
      >
        <div className="flex h-full flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}

function SheetHeader({ children, className }) {
  return (
    <div className={cn("flex items-center justify-between border-b border-sand px-6 py-4", className)}>
      {children}
    </div>
  )
}

function SheetTitle({ children, className }) {
  return (
    <h2 className={cn("font-serif text-xl font-normal text-espresso", className)}>
      {children}
    </h2>
  )
}

function SheetClose({ className, children }) {
  const ctx = React.useContext(SheetContext)
  return (
    <button
      type="button"
      onClick={() => ctx?.onOpenChange?.(false)}
      className={cn("p-1 text-taupe hover:text-espresso", className)}
      aria-label="Close"
    >
      <X className="h-5 w-5" />
    </button>
  )
}

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose }
