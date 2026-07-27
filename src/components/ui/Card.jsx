import { cn } from "@/lib/utils"

const Card = ({ className, children, hover = true, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-white p-6 md:p-8",
        hover && "transition-shadow duration-200 hover:shadow-card-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardHeader = ({ className, children }) => (
  <div className={cn("mb-4", className)}>{children}</div>
)

export const CardTitle = ({ className, children }) => (
  <h3 className={cn("text-lg md:text-xl font-bold text-ink", className)}>
    {children}
  </h3>
)

export const CardDescription = ({ className, children }) => (
  <p className={cn("text-ink-muted text-sm leading-relaxed", className)}>
    {children}
  </p>
)

export default Card
