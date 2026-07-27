import * as React from "react"
import { cn } from "@/lib/utils"

const Dialog = ({ children, open, onOpenChange }) => {
  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={() => onOpenChange?.(false)}
    >
      <div className="fixed inset-0 bg-black/80" />
      <div
        className="relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          onClick={() => onOpenChange?.(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

const DialogHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
DialogDescription.displayName = "DialogDescription"

export { Dialog, DialogHeader, DialogTitle, DialogDescription }
