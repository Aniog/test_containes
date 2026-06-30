import * as React from "react"
import { cn } from "@/lib/utils"

const Sheet = React.forwardRef(({ open, onOpenChange, children, ...props }, ref) => {
  return React.createElement(
    React.Fragment,
    null,
    open && React.createElement("div", {
      className: "fixed inset-0 z-50",
      ...props,
    },
      React.createElement("div", {
        className: "fixed inset-0 bg-black/50",
        onClick: () => onOpenChange?.(false),
      }),
      React.createElement("div", {
        className: cn(
          "fixed right-0 top-0 z-50 h-full w-full max-w-md border-l bg-white p-6 shadow-lg transition-transform",
          open ? "translate-x-0" : "translate-x-full"
        ),
        ref,
      }, children)
    )
  )
})
Sheet.displayName = "Sheet"

export { Sheet }
