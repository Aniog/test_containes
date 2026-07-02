import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef((
  { className, variant = "default", size = "default", asChild = false, ...props },
  ref
) => {
  const Comp = asChild ? React.Slot : "button"
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#BFA15A] disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-[#BFA15A] text-white hover:bg-[#9A7E3F]": variant === "default",
          "border border-[#1C1A17] bg-transparent text-[#1C1A17] hover:bg-[#1C1A17] hover:text-white": variant === "outline",
          "bg-transparent text-[#1C1A17] hover:text-[#BFA15A]": variant === "ghost",
          "bg-[#1C1A17] text-white hover:bg-[#3D3A35]": variant === "dark",
          "h-10 px-6 py-2.5": size === "default",
          "h-12 px-8 py-3.5 text-sm": size === "lg",
          "h-8 px-4 py-2 text-[10px]": size === "sm",
          "w-full": size === "full",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
