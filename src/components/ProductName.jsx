import { cn } from "@/lib/utils"

export function ProductName({ children, className, as: Component = "h3" }) {
  return (
    <Component
      className={cn(
        "font-sans text-sm font-medium uppercase tracking-extra-wide text-espresso",
        className
      )}
    >
      {children}
    </Component>
  )
}
