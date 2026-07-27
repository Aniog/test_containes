import React from 'react'
import { cn } from '@/lib/utils'

const styles = {
  primary: 'bg-blue-700 text-white shadow-sm hover:bg-blue-800 focus-visible:ring-blue-700',
  secondary: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus-visible:ring-blue-700',
  dark: 'bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-900',
  light: 'border border-white/30 bg-white text-slate-950 hover:bg-slate-100 focus-visible:ring-white',
}

export default function Button({ as: Component = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        styles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
