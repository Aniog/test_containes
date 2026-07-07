import { cn } from "@/lib/utils"

export function Button({
  as: Comp = "button",
  variant = "primary",
  className,
  children,
  ...rest
}) {
  const base = "btn"
  const variants = {
    primary: "btn-primary",
    accent:  "btn-accent",
    outline: "btn-outline",
    ghost:   "btn-ghost",
  }
  return (
    <Comp className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </Comp>
  )
}
