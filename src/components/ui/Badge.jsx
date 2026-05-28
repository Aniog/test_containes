import React from 'react'
import { cn } from '@/lib/utils'

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    pending: 'bg-amber-100 text-amber-700',
    approved: 'bg-emerald-100 text-emerald-700',
    rejected: 'bg-red-100 text-red-700',
    paid: 'bg-blue-100 text-blue-700',
    unpaid: 'bg-orange-100 text-orange-700',
    published: 'bg-emerald-100 text-emerald-700',
    draft: 'bg-gray-100 text-gray-600',
    cancelled: 'bg-red-100 text-red-700',
    completed: 'bg-blue-100 text-blue-700',
    purple: 'bg-purple-100 text-purple-700',
    gold: 'bg-yellow-100 text-yellow-700',
  }
  return (
    <span className={cn('text-xs font-medium px-2.5 py-1 rounded-full', variants[variant] || variants.default, className)}>
      {children}
    </span>
  )
}
