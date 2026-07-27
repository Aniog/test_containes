import { cn } from "@/lib/utils"

export function Select({ className, children, ...props }) {
  return (
    <select
      className={cn(
        "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}
