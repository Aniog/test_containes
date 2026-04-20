import { Badge } from '@/components/ui/badge'

const PLATFORM_CONFIG = {
  steam: { label: 'Steam', variant: 'steam', color: 'bg-[#1b2838] text-[#c7d5e0] border border-[#4c6b22]' },
  epic: { label: 'Epic Games', variant: 'epic', color: 'bg-gray-800 text-white border border-gray-600' },
  nintendo: { label: 'Nintendo', variant: 'nintendo', color: 'bg-red-600 text-white' },
  playstation: { label: 'PlayStation', variant: 'playstation', color: 'bg-blue-700 text-white' },
  xbox: { label: 'Xbox', variant: 'xbox', color: 'bg-green-700 text-white' },
  pc: { label: 'PC', variant: 'secondary', color: 'bg-gray-700 text-gray-200' },
  mobile: { label: 'Mobile', variant: 'secondary', color: 'bg-gray-700 text-gray-200' },
}

export function PlatformBadge({ platform, className = '' }) {
  const config = PLATFORM_CONFIG[platform?.toLowerCase()] || { label: platform, color: 'bg-gray-700 text-gray-200' }
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${config.color} ${className}`}>
      {config.label}
    </span>
  )
}

export function PlatformIcon({ platform, size = 'sm' }) {
  const icons = {
    steam: '🎮',
    epic: '⚡',
    nintendo: '🔴',
    playstation: '🎮',
    xbox: '🟢',
  }
  return <span>{icons[platform?.toLowerCase()] || '🎮'}</span>
}

export const PLATFORMS = [
  { id: 'all', label: 'All Platforms' },
  { id: 'steam', label: 'Steam' },
  { id: 'epic', label: 'Epic Games' },
  { id: 'nintendo', label: 'Nintendo' },
  { id: 'playstation', label: 'PlayStation' },
  { id: 'xbox', label: 'Xbox' },
]
