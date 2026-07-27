import { cn } from "@/lib/utils"

const variants = {
  default: "bg-[#EDF1F7] text-[#0B2545]",
  navy: "bg-[#0B2545] text-white",
  red: "bg-[#D62828] text-white",
  gold: "bg-[#C9A227]/10 text-[#7A5F0E] border border-[#C9A227]/30",
  success: "bg-green-50 text-green-700",
  outline: "border border-line text-ink-subtle bg-white",
}

const Badge = ({ children, variant = "default", className }) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge
