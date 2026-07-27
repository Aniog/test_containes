import React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef(function Card(
  { className, children, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white border border-warm-300 rounded-[6px] p-6 md:p-8",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
})

export default Card
