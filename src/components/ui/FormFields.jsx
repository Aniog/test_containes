import { cn } from '@/lib/utils'

export function Input({ className, label, error, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs text-[#9890b8] uppercase tracking-widest font-medium">
          {label}
        </label>
      )}
      <input
        className={cn(
          'bg-[#09080e] border border-[#2e2650] rounded-lg px-3 py-2 text-sm text-[#f0ecff] placeholder-[#5a5278]',
          'focus:outline-none focus:border-[#f0b830] transition-colors',
          error && 'border-[#f04040]',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-[#f04040]">{error}</p>}
    </div>
  )
}

export function Select({ className, label, error, children, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs text-[#9890b8] uppercase tracking-widest font-medium">
          {label}
        </label>
      )}
      <select
        className={cn(
          'bg-[#09080e] border border-[#2e2650] rounded-lg px-3 py-2 text-sm text-[#f0ecff]',
          'focus:outline-none focus:border-[#f0b830] transition-colors',
          error && 'border-[#f04040]',
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && <p className="text-xs text-[#f04040]">{error}</p>}
    </div>
  )
}

export function Textarea({ className, label, error, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs text-[#9890b8] uppercase tracking-widest font-medium">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'bg-[#09080e] border border-[#2e2650] rounded-lg px-3 py-2 text-sm text-[#f0ecff] placeholder-[#5a5278] resize-none',
          'focus:outline-none focus:border-[#f0b830] transition-colors',
          error && 'border-[#f04040]',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-[#f04040]">{error}</p>}
    </div>
  )
}
