import { cn } from "@/lib/utils"

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0f2a4a] focus:outline-none focus:ring-2 focus:ring-[#0f2a4a]/20",
        className
      )}
      {...props}
    />
  )
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0f2a4a] focus:outline-none focus:ring-2 focus:ring-[#0f2a4a]/20",
        className
      )}
      {...props}
    />
  )
}

export function Select({ className, children, ...props }) {
  return (
    <select
      className={cn(
        "h-11 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 focus:border-[#0f2a4a] focus:outline-none focus:ring-2 focus:ring-[#0f2a4a]/20",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}

export function Label({ className, children, ...props }) {
  return (
    <label
      className={cn("block text-sm font-medium text-slate-700 mb-1.5", className)}
      {...props}
    >
      {children}
    </label>
  )
}

export default Input
