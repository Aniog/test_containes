import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const Select = ({ value, onValueChange, children, className, ...props }) => {
  return (
    <div className={cn("relative", className)} {...props}>
      {children}
    </div>
  )
}

const SelectTrigger = ({ children, className, onClick, ...props }) => (
  <button
    className={cn(
      "flex h-10 w-full items-center justify-between border border-borderwarm bg-white px-3 py-2 text-sm font-sans text-charcoal hover:border-gold transition-colors duration-300",
      className
    )}
    onClick={onClick}
    {...props}
  >
    {children}
    <ChevronDown className="h-4 w-4 text-muted" />
  </button>
)

const SelectContent = ({ children, className, open, ...props }) => {
  if (!open) return null
  return (
    <div
      className={cn(
        "absolute top-full left-0 z-50 w-full mt-1 border border-borderwarm bg-white shadow-lg py-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const SelectItem = ({ value, children, onClick, className, ...props }) => (
  <div
    className={cn(
      "px-3 py-2 text-sm font-sans text-charcoal hover:bg-cream cursor-pointer transition-colors duration-200",
      className
    )}
    onClick={() => onClick(value)}
    {...props}
  >
    {children}
  </div>
)

const SelectValue = ({ value, placeholder }) => (
  <span className={cn(value ? "text-charcoal" : "text-muted")}>
    {value || placeholder}
  </span>
)

export { Select, SelectTrigger, SelectContent, SelectItem, SelectValue }
