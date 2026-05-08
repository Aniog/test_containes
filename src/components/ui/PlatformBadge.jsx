import { PLATFORMS } from '../../data/platforms'

const PLATFORM_STYLES = {
  steam: 'bg-[#1b2838] text-[#66c0f4] border-[#66c0f4]/30',
  epic: 'bg-gray-800 text-white border-white/20',
  nintendo: 'bg-red-600 text-white border-red-400/30',
  playstation: 'bg-blue-800 text-blue-200 border-blue-400/30',
  xbox: 'bg-green-700 text-green-200 border-green-400/30',
  all: 'bg-indigo-600 text-indigo-100 border-indigo-400/30',
}

const PLATFORM_LABELS = {
  steam: 'Steam',
  epic: 'Epic',
  nintendo: 'Nintendo',
  playstation: 'PlayStation',
  xbox: 'Xbox',
  all: 'All',
}

export default function PlatformBadge({ platform, size = 'sm' }) {
  const style = PLATFORM_STYLES[platform] || PLATFORM_STYLES.all
  const label = PLATFORM_LABELS[platform] || platform

  const sizeClass = size === 'lg'
    ? 'px-3 py-1 text-sm font-semibold'
    : 'px-2 py-0.5 text-xs font-medium'

  return (
    <span className={`inline-flex items-center rounded-full border ${style} ${sizeClass}`}>
      {label}
    </span>
  )
}
