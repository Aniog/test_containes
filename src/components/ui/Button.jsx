import { cn } from "@/lib/utils"

const variants = {
  primary: "btn-primary",
  primaryGold: "btn-primary-gold",
  outline: "btn-outline",
  outlineLight: "btn-outline-light",
  ghost: "btn-ghost",
}

const sizes = {
  md: "",
  lg: "px-9 py-4 text-xs",
  sm: "px-5 py-2.5 text-[10px]",
}

export default function Button({
  as: Component = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}) {
  return (
    <Component
      className={cn(variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </Component>
  )
}
