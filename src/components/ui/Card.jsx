import React from 'react'
import { cn } from '@/lib/utils'

export function Card({ children, className, ...props }) {
  return (
    <div className={cn('bg-white rounded-xl shadow-sm border border-gray-100', className)} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className }) {
  return <div className={cn('px-6 pt-6 pb-4 border-b border-gray-100', className)}>{children}</div>
}

export function CardBody({ children, className }) {
  return <div className={cn('p-6', className)}>{children}</div>
}

export function CardFooter({ children, className }) {
  return <div className={cn('px-6 pb-6 pt-4 border-t border-gray-100', className)}>{children}</div>
}
