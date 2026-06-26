import { cn } from "@/lib/utils"

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20",
        className
      )}
      {...props}
    />
  )
}
