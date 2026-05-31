import { cn } from '@/lib/utils'

export function Input({ className, label, error, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs text-[#9a95a8] uppercase tracking-widest font-medium">
          {label}
        </label>
      )}
      <input
        className={cn(
          'bg-[#0d0f1a] border border-[#2a2f52] rounded-lg px-3 py-2 text-sm text-[#e8e4d9] placeholder-[#5c5870]',
          'focus:outline-none focus:border-[#c9a84c] transition-colors',
          error && 'border-[#c94c4c]',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-[#c94c4c]">{error}</p>}
    </div>
  )
}

export function Select({ className, label, error, children, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs text-[#9a95a8] uppercase tracking-widest font-medium">
          {label}
        </label>
      )}
      <select
        className={cn(
          'bg-[#0d0f1a] border border-[#2a2f52] rounded-lg px-3 py-2 text-sm text-[#e8e4d9]',
          'focus:outline-none focus:border-[#c9a84c] transition-colors',
          error && 'border-[#c94c4c]',
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-[#c94c4c]">{error}</p>}
    </div>
  )
}

export function Textarea({ className, label, error, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs text-[#9a95a8] uppercase tracking-widest font-medium">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'bg-[#0d0f1a] border border-[#2a2f52] rounded-lg px-3 py-2 text-sm text-[#e8e4d9] placeholder-[#5c5870] resize-none',
          'focus:outline-none focus:border-[#c9a84c] transition-colors',
          error && 'border-[#c94c4c]',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-[#c94c4c]">{error}</p>}
    </div>
  )
}
