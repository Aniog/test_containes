import { cn } from "@/lib/utils"

export function Card({ children, className }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  )
}
