import * as React from "react"
import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-copper-500 text-ink hover:bg-copper-400 active:bg-copper-600 border border-copper-500",
  secondary:
    "bg-transparent text-text border border-line hover:border-copper-500 hover:text-copper-400",
  ghost:
    "bg-transparent text-text-muted hover:text-text border border-transparent",
  outline:
    "bg-transparent text-copper-400 border border-copper-500 hover:bg-copper-500 hover:text-ink",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
}

export const Button = React.forwardRef(function Button(
  { className, variant = "primary", size = "md", asChild, children, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-copper-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})
