import * as React from "react"
import { cn } from "@/lib/utils"

const SheetContext = React.createContext(null)

function Sheet({ open, onOpenChange, children }) {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  )
}

function SheetTrigger({ children, asChild = false, ...props }) {
  const { onOpenChange } = React.useContext(SheetContext) || {}
  const child = React.Children.only(children)

  if (asChild && React.isValidElement(child)) {
    return React.cloneElement(child, {
      onClick: () => onOpenChange?.(true),
      ...props,
    })
  }

  return (
    <button onClick={() => onOpenChange?.(true)} {...props}>
      {children}
    </button>
  )
}

function SheetContent({ side = "right", className, children, ...props }) {
  const { open, onOpenChange } = React.useContext(SheetContext) || {}

  if (!open) return null

  const isRight = side === "right"

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => onOpenChange?.(false)}
      />
      <div
        className={cn(
          "fixed top-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-in-out",
          isRight ? "right-0" : "left-0",
          open ? "translate-x-0" : isRight ? "translate-x-full" : "-translate-x-full",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

function SheetHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-2 text-center sm:text-left border-b border-brand-border px-6 py-5", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }) {
  return (
    <h2
      className={cn("font-serif text-2xl text-brand-text", className)}
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-sm text-brand-muted", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }) {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-2 border-t border-brand-border px-6 py-5", className)}
      {...props}
    />
  )
}

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter }