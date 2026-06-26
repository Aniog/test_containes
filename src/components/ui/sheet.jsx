import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const Sheet = ({ children, open, onOpenChange }) => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  )
}

const SheetContext = React.createContext({ open: false, onOpenChange: () => {} })

const SheetTrigger = ({ children, asChild }) => {
  const { onOpenChange } = React.useContext(SheetContext)
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: () => onOpenChange(true) })
  }
  return <div onClick={() => onOpenChange(true)}>{children}</div>
}

const SheetContent = ({ children, className, side = "right" }) => {
  const { open, onOpenChange } = React.useContext(SheetContext)
  if (!open) return null
  const position = side === "right" ? "right-0" : "left-0"
  return (
    <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/40" onClick={() => onOpenChange(false)} />
      <div
        className={cn(
          "absolute top-0 h-full w-[min(86vw,360px)] bg-white shadow-2xl p-6 overflow-y-auto",
          position,
          className
        )}
      >
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </div>
    </div>
  )
}

export { Sheet, SheetTrigger, SheetContent }
