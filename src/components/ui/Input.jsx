import React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef(function Input(
  { className, type = 'text', invalid, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        'flex h-12 w-full rounded-lg border bg-surface px-4 text-[15px] text-ink placeholder:text-muted/70',
        invalid ? 'border-red-500' : 'border-line',
        'transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20',
        'disabled:opacity-50 disabled:pointer-events-none',
        className
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
})

const Textarea = React.forwardRef(function Textarea(
  { className, rows = 5, invalid, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        'flex w-full rounded-lg border bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-muted/70',
        invalid ? 'border-red-500' : 'border-line',
        'transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20',
        'disabled:opacity-50 disabled:pointer-events-none resize-none',
        className
      )}
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
})

const Select = React.forwardRef(function Select(
  { className, children, ...props },
  ref
) {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          'flex h-12 w-full appearance-none rounded-lg border border-line bg-surface px-4 pr-10 text-[15px] text-ink',
          'transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20',
          'disabled:opacity-50 disabled:pointer-events-none',
          className
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        aria-hidden
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
})

const Label = React.forwardRef(function Label(
  { className, children, ...props },
  ref
) {
  return (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium text-ink-soft inline-flex items-center gap-1',
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
})

export { Input, Textarea, Select, Label }
