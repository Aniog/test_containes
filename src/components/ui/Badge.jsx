import { cn } from '@/lib/utils'

export function Badge({ children, className, variant = 'default' }) {
  const variants = {
    default: 'bg-indigo-600 text-white',
    secondary: 'bg-gray-700 text-gray-200',
    outline: 'border border-gray-600 text-gray-300',
    success: 'bg-green-600 text-white',
    danger: 'bg-red-600 text-white',
    warning: 'bg-yellow-500 text-black',
    steam: 'bg-[#1b2838] text-[#66c0f4] border border-[#66c0f4]/30',
    epic: 'bg-[#2d2d2d] text-white border border-gray-600',
    nintendo: 'bg-red-600 text-white',
    playstation: 'bg-blue-700 text-white',
    xbox: 'bg-green-700 text-white',
  }
  return (
    <span className={cn('inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold', variants[variant] || variants.default, className)}>
      {children}
    </span>
  )
}
