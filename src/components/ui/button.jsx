import { cn } from "@/lib/utils"

export function Button({ className, variant = "default", size = "default", children, ...props }) {
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none"
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-600 hover:bg-gray-100",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  }
  const sizes = {
    default: "h-9 px-4 py-2 text-sm",
    sm: "h-7 px-3 text-xs",
    icon: "h-8 w-8",
  }
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
