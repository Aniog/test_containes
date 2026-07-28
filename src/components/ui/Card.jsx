import { cn } from "@/lib/utils"

export function Card({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md md:p-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  )
}
