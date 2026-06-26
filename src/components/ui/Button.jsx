import { cn } from "@/lib/utils"

export function Button({ className, variant = "primary", size = "md", children, ...props }) {
  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  const variants = {
    primary: "bg-[#1A4B8C] hover:bg-[#153d73] text-white focus:ring-[#1A4B8C]",
    secondary: "border-2 border-[#1A4B8C] text-[#1A4B8C] hover:bg-[#1A4B8C] hover:text-white focus:ring-[#1A4B8C]",
    cta: "bg-[#C0392B] hover:bg-[#a93226] text-white focus:ring-[#C0392B]",
    ghost: "text-[#1A4B8C] hover:bg-[#EEF2F7] focus:ring-[#1A4B8C]",
    white: "bg-white text-[#1A4B8C] hover:bg-[#EEF2F7] focus:ring-white",
  }
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  }
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
