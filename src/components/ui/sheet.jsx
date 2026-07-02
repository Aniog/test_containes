import * as React from "react"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const Sheet = ({ children, open, onOpenChange }) => {
  const [isOpen, setIsOpen] = React.useState(open || false)

  React.useEffect(() => {
    if (open !== undefined) setIsOpen(open)
  }, [open])

  const handleClose = React.useCallback(() => {
    if (onOpenChange) onOpenChange(false)
    else setIsOpen(false)
  }, [onOpenChange])

  const handleOpen = React.useCallback(() => {
    if (onOpenChange) onOpenChange(true)
    else setIsOpen(true)
  }, [onOpenChange])

  const contextValue = React.useMemo(
    () => ({ open: isOpen, onOpenChange: handleClose, onOpen: handleOpen }),
    [isOpen, handleClose, handleOpen]
  )

  return <SheetContext.Provider value={contextValue}>{children}</SheetContext.Provider>
}

const SheetContext = React.createContext(null)

const useSheet = () => {
  const context = React.useContext(SheetContext)
  if (!context) throw new Error("Sheet components must be used within a Sheet")
  return context
}

const SheetTrigger = ({ children, asChild = false }) => {
  const { onOpen } = useSheet()
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { onClick: onOpen })
  }
  return <button onClick={onOpen}>{children}</button>
}

const SheetContent = ({ children, className, side = "right" }) => {
  const { open, onOpenChange } = useSheet()

  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-[rgba(28,26,23,0.35)] backdrop-blur-sm transition-opacity"
            onClick={() => onOpenChange(false)}
          />
          <div
            className={cn(
              "absolute top-0 h-full w-full max-w-md bg-[#FAF7F2] p-6 shadow-xl transition-transform duration-300 ease-out",
              side === "right" ? "right-0 translate-x-0" : "left-0 -translate-x-0",
              className
            )}
          >
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-5 top-5 text-[#1C1A17] hover:text-[#BFA15A] transition-colors"
              aria-label="Close"
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

const SheetHeader = ({ children, className }) => (
  <div className={cn("mb-6", className)}>{children}</div>
)

const SheetTitle = ({ children, className }) => (
  <h2 className={cn("font-serif text-2xl font-medium tracking-tight text-[#1C1A17]", className)}>
    {children}
  </h2>
)

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle }
