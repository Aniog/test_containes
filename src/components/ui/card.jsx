import { cn } from "@/lib/utils"

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardBody({ className, children, ...props }) {
  return (
    <div className={cn("p-6 md:p-7", className)} {...props}>
      {children}
    </div>
  )
}

export default Card
