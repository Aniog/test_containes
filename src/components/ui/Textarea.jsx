import React from "react"
import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(function Textarea(
  { className, label, hint, error, id, rows = 4, ...rest },
  ref
) {
  const inputId = id || rest.name
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-ink"
        >
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={inputId}
        rows={rows}
        className={cn(
          "w-full rounded-[4px] border border-warm-300 bg-white px-3.5 py-3 text-[15px] text-ink placeholder:text-ink-muted",
          "focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/25",
          "disabled:bg-warm-100 disabled:cursor-not-allowed resize-y",
          error && "border-warning focus:border-warning focus:ring-warning/25",
          className
        )}
        {...rest}
      />
      {hint && !error && (
        <span className="text-xs text-ink-muted">{hint}</span>
      )}
      {error && (
        <span className="text-xs text-warning" role="alert">{error}</span>
      )}
    </div>
  )
})

export default Textarea
