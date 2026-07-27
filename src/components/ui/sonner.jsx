import React from 'react'
import { cn } from '@/lib/utils'

const Toaster = ({ className, ...props }) => {
  return (
    <div
      className={cn('fixed top-4 right-4 z-50 flex flex-col gap-2', className)}
      {...props}
    />
  )
}

const Toast = ({ title, description, className }) => {
  return (
    <div className={cn('rounded-md border border-slate-200 bg-white p-4 shadow-lg', className)}>
      {title && <div className="font-semibold text-slate-900">{title}</div>}
      {description && <div className="text-sm text-slate-600">{description}</div>}
    </div>
  )
}

export { Toaster, Toast }
