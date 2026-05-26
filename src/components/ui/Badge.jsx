import React from 'react'
import { cn } from '../../lib/utils'

export function Badge({ children, variant = 'default', className }) {
  const variants = {
    default: 'bg-rose-600 text-white',
    secondary: 'bg-slate-200 text-slate-700',
    success: 'bg-emerald-600 text-white',
    danger: 'bg-red-600 text-white',
    warning: 'bg-amber-400 text-amber-900',
    outline: 'border border-slate-300 text-slate-600',
    steam: 'bg-[#1b2838] text-[#c7d5e0] border border-[#4c6b22]',
    epic: 'bg-[#2d2d2d] text-white border border-[#0078f2]',
    nintendo: 'bg-[#e4000f] text-white',
    playstation: 'bg-[#003087] text-white',
    xbox: 'bg-[#107c10] text-white',
  }
  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold', variants[variant] || variants.default, className)}>
      {children}
    </span>
  )
}

export function PlatformBadge({ platform }) {
  const map = {
    'Steam': 'steam',
    'Epic': 'epic',
    'Nintendo Switch': 'nintendo',
    'PlayStation': 'playstation',
    'Xbox': 'xbox',
  }
  return <Badge variant={map[platform] || 'secondary'}>{platform}</Badge>
}
