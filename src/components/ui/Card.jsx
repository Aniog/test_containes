import { cn } from '@/lib/utils'

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn('bg-[#181230] border border-[#2e2650] rounded-xl', className)}
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
    <h3 className={cn('text-[#f0ecff] font-semibold text-base', className)}>
      {children}
    </h3>
  )
}

export function CardContent({ className, children }) {
  return <div className={cn('p-5 pt-0', className)}>{children}</div>
}
