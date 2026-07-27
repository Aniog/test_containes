import React from "react"
import { cn } from "@/lib/utils"

const SectionHeader = ({ eyebrow, title, description, align = "left", className }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 max-w-3xl",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="h-section">{title}</h2>}
      {description && <p className="body-lead">{description}</p>}
    </div>
  )
}

export default SectionHeader
