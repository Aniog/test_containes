import { cn } from '@/lib/utils'

const variants = {
  gold: 'bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30',
  purple: 'bg-[#7c5cbf]/20 text-[#a07de0] border border-[#7c5cbf]/30',
  green: 'bg-[#4caf7d]/20 text-[#4caf7d] border border-[#4caf7d]/30',
  red: 'bg-[#c94c4c]/20 text-[#c94c4c] border border-[#c94c4c]/30',
  amber: 'bg-[#c9844c]/20 text-[#c9844c] border border-[#c9844c]/30',
  muted: 'bg-[#2a2f52] text-[#9a95a8] border border-[#2a2f52]',
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
