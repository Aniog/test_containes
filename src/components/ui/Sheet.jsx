import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const SheetContext = React.createContext(null)

export function Sheet({ children, open, onOpenChange }) {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  )
}

export function SheetTrigger({ children, asChild }) {
  const ctx = React.useContext(SheetContext)
  if (!ctx) return children
  const trigger = asChild && React.isValidElement(children)
    ? React.cloneElement(children, { onClick: () => ctx.onOpenChange?.(true) })
    : <button onClick={() => ctx.onOpenChange?.(true)}>{children}</button>
  return trigger
}

export function SheetContent({ children, side = "right", className }) {
  const ctx = React.useContext(SheetContext)
  if (!ctx?.open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-slate-900/40"
        onClick={() => ctx.onOpenChange?.(false)}
      />
      <div
        className={cn(
          "absolute top-0 h-full w-full max-w-sm bg-white p-6 shadow-xl transition",
          side === "right" ? "right-0" : "left-0",
          className
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">SSourcing China</span>
          <button
            onClick={() => ctx.onOpenChange?.(false)}
            className="rounded-md p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  )
}
