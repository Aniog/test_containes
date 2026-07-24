import * as React from "react"

export const Slot = React.forwardRef(({ children, ...props }, ref) => {
  if (!children) return null
  const child = React.Children.only(children)
  return React.cloneElement(child, { ref, ...props })
})
Slot.displayName = "Slot"
