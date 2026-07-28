import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  )
})
Input.displayName = "Input"

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
        className
      )}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

const Label = ({ children, htmlFor, className }) => (
  <label htmlFor={htmlFor} className={cn("mb-1 block text-sm font-semibold text-slate-700", className)}>
    {children}
  </label>
)

export { Input, Textarea, Label }
