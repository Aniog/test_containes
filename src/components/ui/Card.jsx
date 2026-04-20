import { cn } from '@/lib/utils'

export function Card({ children, className, ...props }) {
  return (
    <div className={cn('bg-gray-800 border border-gray-700 rounded-xl overflow-hidden', className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }) {
  return <div className={cn('p-4 pb-2', className)}>{children}</div>
}

export function CardContent({ children, className }) {
  return <div className={cn('p-4 pt-2', className)}>{children}</div>
}

export function CardFooter({ children, className }) {
  return <div className={cn('p-4 pt-0 flex items-center', className)}>{children}</div>
}
