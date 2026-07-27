import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const Input = forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted",
        "focus:border-[#0B2545] focus:outline-none focus:ring-2 focus:ring-[#0B2545]/10",
        "transition-colors duration-150",
        className
      )}
      {...props}
    />
  )
})

Input.displayName = "Input"

export const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted",
        "focus:border-[#0B2545] focus:outline-none focus:ring-2 focus:ring-[#0B2545]/10",
        "transition-colors duration-150 resize-y min-h-[120px]",
        className
      )}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"

export const Select = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "w-full rounded-md border border-line bg-white px-4 py-3 text-sm text-ink",
          "focus:border-[#0B2545] focus:outline-none focus:ring-2 focus:ring-[#0B2545]/10",
          "transition-colors duration-150 appearance-none cursor-pointer",
          "bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%20fill=%22%2364748B%22><path%20fill-rule=%22evenodd%22%20d=%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.06l3.71-3.83a.75.75%200%20111.08%201.04l-4.25%204.39a.75.75%200%2001-1.08%200L5.21%208.27a.75.75%200%2001.02-1.06z%22%20clip-rule=%22evenodd%22/></svg>')] bg-[length:20px_20px] bg-[right_12px_center] bg-no-repeat pr-10",
          className
        )}
        {...props}
      >
        {children}
      </select>
    )
  }
)

Select.displayName = "Select"

export const FormField = ({ label, required, hint, error, children, className }) => {
  return (
    <div className={cn("space-y-1.5", className)}>
      {label && (
        <label className="block text-sm font-medium text-ink">
          {label}
          {required && <span className="text-[#D62828] ml-1">*</span>}
        </label>
      )}
      {children}
      {hint && !error && (
        <p className="text-xs text-ink-muted">{hint}</p>
      )}
      {error && (
        <p className="text-xs text-[#D62828]">{error}</p>
      )}
    </div>
  )
}

export default Input
