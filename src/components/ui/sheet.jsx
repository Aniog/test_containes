import * as React from "react"
import { cva } from "tailwind-variants"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const SheetContext = React.createContext({})

function useSheetContext() {
  const context = React.useContext(SheetContext)
  if (!context) throw new Error("Sheet components must be used within <Sheet>")
  return context
}

function Sheet({ open, onOpenChange, children }) {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  )
}

function SheetTrigger({ asChild = false, children, ...props }) {
  const { onOpenChange } = useSheetContext()
  return React.cloneElement(children, {
    onClick: () => onOpenChange?.(true),
    ...props,
  })
}

function SheetClose({ asChild = false, children, ...props }) {
  const { onOpenChange } = useSheetContext()
  return React.cloneElement(children, {
    onClick: () => onOpenChange?.(false),
    ...props,
  })
}

function SheetOverlay({ className }) {
  const { open, onOpenChange } = useSheetContext()
  if (!open) return null
  return (
    <div
      className={cn("fixed inset-0 z-50 bg-black/40 backdrop-blur-sm", className)}
      onClick={() => onOpenChange?.(false)}
    />
  )
}

function SheetContent({ side = "right", className, children }) {
  const { open, onOpenChange } = useSheetContext()
  const isRight = side === "right"
  const isLeft = side === "left"

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <SheetOverlay />
      <div
        className={cn(
          "relative z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out",
          isRight && "ml-auto",
          isLeft && "mr-auto",
          className
        )}
      >
        <button
          onClick={() => onOpenChange?.(false)}
          className="absolute right-4 top-4 rounded-md p-1 text-gray-500 hover:text-gray-900"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  )
}

function SheetHeader({ className, ...props }) {
  return <div className={cn("flex flex-col gap-1.5", className)} {...props} />
}

function SheetTitle({ className, ...props }) {
  return <h2 className={cn("text-lg font-semibold", className)} {...props} />
}

function SheetDescription({ className, ...props }) {
  return <p className={cn("text-sm text-gray-500", className)} {...props} />
}

function SheetFooter({ className, ...props }) {
  return <div className={cn("mt-auto flex flex-col gap-2", className)} {...props} />
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
}
