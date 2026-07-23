import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  const handleChange = (e) => {
    if (onCheckedChange) {
      onCheckedChange(e.target.checked)
    }
  }

  return (
    <label className="relative flex h-4 w-4 cursor-pointer items-center justify-center">
      <input
        type="checkbox"
        ref={ref}
        checked={checked}
        onChange={handleChange}
        className="peer sr-only"
        {...props}
      />
      <div
        className={cn(
          "flex h-4 w-4 items-center justify-center rounded-sm border border-hairline bg-white transition-colors peer-checked:border-espresso peer-checked:bg-espresso peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2",
          className
        )}
      >
        <Check className="h-3 w-3 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
      </div>
    </label>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
