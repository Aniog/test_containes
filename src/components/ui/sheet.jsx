import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const SheetContext = React.createContext(null)

function useSheet() {
  const context = React.useContext(SheetContext)
  if (!context) throw new Error("useSheet must be used within a Sheet")
  return context
}

const Sheet = ({ children, open, onOpenChange }) => {
  return (
    <SheetContext.Provider value={{ open, onOpenChange }}>
      {children}
    </SheetContext.Provider>
  )
}

const SheetTrigger = ({ children, asChild }) => {
  const { onOpenChange } = useSheet()

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: () => onOpenChange(true),
    })
  }

  return <button onClick={() => onOpenChange(true)}>{children}</button>
}

const SheetContent = ({ children, className, side = "right" }) => {
  const { open, onOpenChange } = useSheet()

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => onOpenChange(false)}
          />
          <div
            className={cn(
              "absolute top-0 h-full w-full max-w-sm bg-white shadow-xl p-6 transition-transform",
              side === "right" ? "right-0" : "left-0",
              className
            )}
          >
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted hover:bg-background hover:text-foreground focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export { Sheet, SheetTrigger, SheetContent }
