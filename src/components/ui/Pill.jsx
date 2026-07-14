import { cn } from "@/lib/utils"

export function Pill({ active = false, className, children, ...rest }) {
  return (
    <button
      type="button"
      data-active={active ? "true" : "false"}
      className={cn("pill", className)}
      {...rest}
    >
      {children}
    </button>
  )
}
