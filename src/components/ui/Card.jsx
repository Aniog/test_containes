import { cn } from "@/lib/utils"

export function Card({ className, children, ...props }) {
  return (
    <div className={cn("bg-white rounded-xl shadow-sm border border-[#D8E0EA] p-6 hover:shadow-md transition-shadow", className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children }) {
  return <div className={cn("mb-4", className)}>{children}</div>
}

export function CardTitle({ className, children }) {
  return <h3 className={cn("text-xl font-semibold text-[#1A1F2E]", className)}>{children}</h3>
}

export function CardBody({ className, children }) {
  return <div className={cn("text-[#3D4A5C]", className)}>{children}</div>
}
