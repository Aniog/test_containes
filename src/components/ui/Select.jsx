import React from "react"
import { cn } from "@/lib/utils"

const Select = React.forwardRef(function Select(
  { className, label, hint, error, id, children, ...rest },
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
      <select
        ref={ref}
        id={inputId}
        className={cn(
          "h-11 w-full rounded-[4px] border border-warm-300 bg-white px-3 text-[15px] text-ink",
          "focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/25",
          "disabled:bg-warm-100 disabled:cursor-not-allowed",
          error && "border-warning focus:border-warning focus:ring-warning/25",
          className
        )}
        {...rest}
      >
        {children}
      </select>
      {hint && !error && (
        <span className="text-xs text-ink-muted">{hint}</span>
      )}
      {error && (
        <span className="text-xs text-warning" role="alert">{error}</span>
      )}
    </div>
  )
})

export default Select
