import { cn } from "@/lib/utils"

export function Badge({ className, variant = "default", children }) {
  const variants = {
    default: "bg-indigo-100 text-indigo-700",
    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700",
    completed: "bg-gray-100 text-gray-500",
  }
  return (
    <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium", variants[variant] || variants.default, className)}>
      {children}
    </span>
  )
}
