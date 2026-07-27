import { cn } from "@/lib/utils"

export function Alert({ children, variant = "success", className }) {
  const variants = {
    success: "bg-green-50 text-green-800 border-green-200",
    error: "bg-red-50 text-red-800 border-red-200",
    info: "bg-primary-light text-primary-dark border-primary/20",
  }
  return (
    <div
      className={cn(
        "rounded-lg border px-4 py-3 text-sm",
        variants[variant],
        className
      )}
      role={variant === "error" ? "alert" : "status"}
    >
      {children}
    </div>
  )
}
