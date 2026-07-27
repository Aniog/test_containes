import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const Sheet = ({ children, open, onOpenChange }) => {
  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { open, onOpenChange })
      )}
    </>
  )
}

const SheetTrigger = ({ children, onOpenChange }) => (
  <div onClick={() => onOpenChange(true)} className="cursor-pointer">
    {children}
  </div>
)

const SheetContent = ({ children, open, onOpenChange, side = "right", className }) => {
  const dialogRef = React.useRef(null)

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      dialog.showModal()
    } else {
      dialog.close()
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      onClick={(e) => {
        if (e.target === dialogRef.current) onOpenChange(false)
      }}
      onClose={() => onOpenChange(false)}
      className={cn(
        "fixed inset-y-0 m-0 h-full max-h-none w-full max-w-sm bg-background p-0 shadow-lg backdrop:bg-black/50 open:animate-in open:slide-in-from-right",
        side === "left" && "left-0 open:slide-in-from-left",
        side === "right" && "right-0 open:slide-in-from-right",
        className
      )}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-end p-4">
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} aria-label="Close">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex-1 overflow-auto px-6 pb-6">{children}</div>
      </div>
    </dialog>
  )
}

export { Sheet, SheetTrigger, SheetContent }
