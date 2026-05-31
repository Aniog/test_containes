import { cn } from '@/lib/utils'

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn('bg-[#1a1e35] border border-[#2a2f52] rounded-xl', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children }) {
  return <div className={cn('p-5 pb-3', className)}>{children}</div>
}

export function CardTitle({ className, children }) {
  return (
    <h3 className={cn('text-[#e8e4d9] font-semibold text-base', className)}>
      {children}
    </h3>
  )
}

export function CardContent({ className, children }) {
  return <div className={cn('p-5 pt-0', className)}>{children}</div>
}
