import { cn } from "@/lib/utils"

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        "w-full h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-500",
        "focus:outline-none focus:ring-2 focus:ring-navy-900/15 focus:border-navy-500",
        "disabled:bg-slate-50 disabled:text-slate-500",
        className
      )}
      {...props}
    />
  )
}

export function Textarea({ className, rows = 5, ...props }) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500",
        "focus:outline-none focus:ring-2 focus:ring-navy-900/15 focus:border-navy-500",
        "disabled:bg-slate-50 disabled:text-slate-500",
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
        "w-full h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900",
        "focus:outline-none focus:ring-2 focus:ring-navy-900/15 focus:border-navy-500",
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
}

export function Label({ className, children, htmlFor, required }) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "block text-sm font-medium text-slate-700 mb-1.5",
        className
      )}
    >
      {children}
      {required && <span className="text-amber-600 ml-1">*</span>}
    </label>
  )
}

export function FieldHint({ children }) {
  return <p className="text-xs text-slate-500 mt-1.5">{children}</p>
}

export function FieldError({ children }) {
  if (!children) return null
  return <p className="text-xs text-danger mt-1.5">{children}</p>
}