import { cn } from "@/lib/utils"

export function Card({ className, ...props }) {
  return <div className={cn("card", className)} {...props} />
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("flex flex-col space-y-1.5", className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn("text-xl font-semibold leading-tight text-slate-900", className)} {...props} />
}

export function CardDescription({ className, ...props }) {
  return <p className={cn("text-sm text-slate-600", className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn("pt-4", className)} {...props} />
}
