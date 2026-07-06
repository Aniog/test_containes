import { cn } from "@/lib/utils"

export function Price({ amount, className }) {
  return (
    <span className={cn("font-sans text-sm font-medium text-espresso", className)}>
      ${amount.toFixed(2)}
    </span>
  )
}
