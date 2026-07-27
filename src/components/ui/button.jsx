import { cn } from "@/lib/utils"

const variants = {
  primary: "bg-[#0f2a4a] text-white hover:bg-[#16365c]",
  accent: "bg-[#f59e0b] text-[#1a1303] hover:bg-[#fbbf24]",
  outline: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100",
  white: "bg-white text-[#0f2a4a] hover:bg-slate-100",
}

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
}

export function Button({ as: As = "button", variant = "primary", size = "md", className, children, ...props }) {
  return (
    <As
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2a4a] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </As>
  )
}

export default Button
