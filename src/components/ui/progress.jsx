import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, value, color = "purple", ...props }, ref) => {
  const colors = {
    purple: "bg-purple-500",
    amber: "bg-amber-400",
    green: "bg-green-500",
    pink: "bg-pink-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
  }
  return (
    <div
      ref={ref}
      className={cn("relative h-3 w-full overflow-hidden rounded-full bg-gray-100", className)}
      {...props}
    >
      <div
        className={cn("h-full rounded-full transition-all duration-500", colors[color] || "bg-purple-500")}
        style={{ width: `${Math.min(100, Math.max(0, value || 0))}%` }}
      />
    </div>
  )
})
Progress.displayName = "Progress"

export { Progress }
