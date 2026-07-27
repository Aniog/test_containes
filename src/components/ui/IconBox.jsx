import React from "react"
import { cn } from "@/lib/utils"

const IconBox = ({ icon: Icon, className, size = "md" }) => {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  }
  const iconSizes = {
    sm: 18,
    md: 22,
    lg: 26,
  }
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-[4px] bg-teal-light text-teal shrink-0",
        sizeClasses[size],
        className
      )}
    >
      <Icon size={iconSizes[size]} strokeWidth={1.75} />
    </div>
  )
}

export default IconBox
