import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

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
  if (!ctx) throw new Error("SheetTrigger must be inside Sheet")
  const child = asChild && React.isValidElement(children)
    ? React.cloneElement(children, { onClick: () => ctx.onOpenChange(true) })
    : null
  return child || (
    <button type="button" onClick={() => ctx.onOpenChange(true)}>
      {children}
    </button>
  )
}

function SheetContent({ children, side = "right", className }) {
  const ctx = React.useContext(SheetContext)
  if (!ctx) throw new Error("SheetContent must be inside Sheet")

  React.useEffect(() => {
    if (!ctx.open) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [ctx.open])

  return (
    <div
      aria-hidden={!ctx.open}
      className={cn(
        "fixed inset-0 z-50 transition-opacity duration-300",
        ctx.open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div
        className="absolute inset-0 bg-velmora-charcoal/40 backdrop-blur-sm"
        onClick={() => ctx.onOpenChange(false)}
      />
      <div
        className={cn(
          "absolute top-0 h-full w-full max-w-md bg-velmora-cream shadow-2xl transition-transform duration-300 ease-out",
          side === "right" ? "right-0" : "left-0",
          ctx.open
            ? "translate-x-0"
            : side === "right"
            ? "translate-x-full"
            : "-translate-x-full",
          className
        )}
      >
        <button
          type="button"
          onClick={() => ctx.onOpenChange(false)}
          className="absolute right-4 top-4 p-2 text-velmora-mocha hover:text-velmora-espresso"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  )
}

function SheetHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }) {
  return (
    <h2
      className={cn("font-serif text-2xl font-medium text-velmora-espresso", className)}
      {...props}
    />
  )
}

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle }
