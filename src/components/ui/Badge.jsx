import { cn } from "@/lib/utils"

export function Badge({ className, variant = "default", children }) {
  const variants = {
    default: "bg-[#EEF2F7] text-[#1A4B8C]",
    success: "bg-green-100 text-green-700",
    warning: "bg-amber-100 text-amber-700",
    red: "bg-red-100 text-[#C0392B]",
    gold: "bg-amber-50 text-[#D4A017]",
  }
  return (
    <span className={cn("inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full", variants[variant], className)}>
      {children}
    </span>
  )
}
