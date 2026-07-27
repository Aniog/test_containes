import { cn } from "@/lib/utils"

export default function Card({ className, children, ...rest }) {
  return (
    <div
      className={cn(
        "bg-white border border-slate-200 rounded-xl shadow-card p-6 md:p-8",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
