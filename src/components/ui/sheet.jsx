import * as React from "react"
import { X } from "lucide-react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const SheetContext = React.createContext(null)

function useSheet() {
  const context = React.useContext(SheetContext)
  if (!context) {
    throw new Error("Sheet components must be used within <Sheet>")
  }
  return context
}

function Sheet({ children, open, onOpenChange }) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen

  const setOpen = React.useCallback(
    (value) => {
      if (!isControlled) setInternalOpen(value)
      onOpenChange?.(value)
    },
    [isControlled, onOpenChange]
  )

  return (
    <SheetContext.Provider value={{ open: isOpen, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

const SheetTrigger = React.forwardRef(({ asChild, children, ...props }, ref) => {
  const { setOpen } = useSheet()
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      onClick: (e) => {
        children.props.onClick?.(e)
        setOpen(true)
      },
      ...props,
    })
  }
  return (
    <button ref={ref} onClick={() => setOpen(true)} {...props}>
      {children}
    </button>
  )
})
SheetTrigger.displayName = "SheetTrigger"

const SheetClose = React.forwardRef(({ asChild, children, ...props }, ref) => {
  const { setOpen } = useSheet()
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      onClick: (e) => {
        children.props.onClick?.(e)
        setOpen(false)
      },
      ...props,
    })
  }
  return (
    <button ref={ref} onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  )
})
SheetClose.displayName = "SheetClose"

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-surface p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-slide-in-right data-[state=closed]:animate-slide-out-right",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 h-auto border-b",
        bottom: "inset-x-0 bottom-0 h-auto border-t",
        left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-full border-l sm:max-w-md",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

function SheetContent({ children, className, side = "right", ...props }) {
  const { open, setOpen } = useSheet()
  React.useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open, setOpen])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        data-state={open ? "open" : "closed"}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        {children}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-5 w-5 text-primary" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  )
}
SheetContent.displayName = "SheetContent"

function SheetHeader({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      )}
      {...props}
    />
  )
}
SheetHeader.displayName = "SheetHeader"

function SheetTitle({ className, ...props }) {
  return (
    <h3
      className={cn("font-serif text-2xl font-semibold text-primary", className)}
      {...props}
    />
  )
}
SheetTitle.displayName = "SheetTitle"

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
}
