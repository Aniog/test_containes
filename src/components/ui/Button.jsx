import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(function Button(
  {
    className,
    variant = "default",
    size = "default",
    asChild = false,
    children,
    ...props
  },
  ref,
) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "default" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "secondary" &&
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "outline" &&
          "border border-border bg-transparent hover:bg-secondary hover:text-secondary-foreground",
        variant === "ghost" &&
          "hover:bg-secondary hover:text-secondary-foreground",
        variant === "link" &&
          "text-primary underline-offset-4 hover:underline",
        size === "default" && "h-11 px-6 py-2",
        size === "sm" && "h-9 px-4 text-xs",
        size === "lg" && "h-12 px-8",
        size === "icon" && "h-10 w-10",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
})

export { Button }
