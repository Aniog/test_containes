import { cn } from '@/lib/utils'

const variants = {
  gold: 'bg-[#f0b830]/20 text-[#f0b830] border border-[#f0b830]/30',
  purple: 'bg-[#8b5cf6]/20 text-[#b48af8] border border-[#8b5cf6]/30',
  green: 'bg-[#34d399]/20 text-[#34d399] border border-[#34d399]/30',
  red: 'bg-[#f04040]/20 text-[#f04040] border border-[#f04040]/30',
  amber: 'bg-[#f09030]/20 text-[#f09030] border border-[#f09030]/30',
  muted: 'bg-[#2e2650] text-[#9890b8] border border-[#2e2650]',
  blue: 'bg-blue-900/30 text-blue-300 border border-blue-700/30',
}

export function Badge({ variant = 'muted', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
