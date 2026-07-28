import { cn } from "@/lib/utils"

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-ink placeholder:text-slate-400 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20",
        className,
      )}
      {...props}
    />
  )
}

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-ink placeholder:text-slate-400 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20",
        className,
      )}
      {...props}
    />
  )
}

export function Label({ className, children, ...props }) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-sm font-medium text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  )
}

export function Select({ className, children, ...props }) {
  return (
    <select
      className={cn(
        "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-ink transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
}
