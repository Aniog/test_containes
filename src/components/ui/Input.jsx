import { cn } from '@/lib/utils'

export function Input({ className, label, error, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      <input
        className={cn(
          'w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 bg-white',
          'focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent',
          'disabled:bg-slate-50 disabled:text-slate-500',
          error && 'border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}

export function Select({ className, label, error, children, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      <select
        className={cn(
          'w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 bg-white',
          'focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent',
          error && 'border-red-500',
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}

export function Textarea({ className, label, error, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-slate-700">{label}</label>}
      <textarea
        className={cn(
          'w-full px-3 py-2 border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 bg-white resize-none',
          'focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent',
          error && 'border-red-500',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}
