import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
    premium: "bg-foreground text-background hover:bg-foreground/90 uppercase tracking-widest text-[10px] font-bold",
    ghost: "bg-transparent text-foreground hover:bg-black/5",
    link: "text-primary underline-offset-4 hover:underline",
  }
  const sizes = {
    default: "h-11 px-8 py-2",
    sm: "h-9 px-4 text-xs",
    lg: "h-14 px-10 text-base",
    icon: "h-10 w-10",
  }
  
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
        variants[variant] || variants.default,
        sizes[size] || sizes.default,
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }
