import * as React from "react"
import { cn } from "@/lib/utils"

const variants = {
  primary:
    "bg-amber text-ink hover:bg-amber-deep hover:text-white shadow-[0_8px_24px_-8px_rgba(245,158,11,0.5)]",
  outlineLight:
    "border border-white/30 text-white hover:border-amber hover:text-amber bg-transparent",
  outlineDark:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white bg-transparent",
  ghostLight: "text-white hover:bg-white/10",
}

const sizes = {
  md: "px-7 py-3 text-sm",
  lg: "px-8 py-4 text-base",
  sm: "px-5 py-2.5 text-sm",
}

const Button = React.forwardRef(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
)
Button.displayName = "Button"

export { Button }
