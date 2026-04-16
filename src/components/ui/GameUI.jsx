import { PLATFORM_BADGES, CATEGORY_BADGES } from '../../lib/platforms'

export function PlatformBadge({ platform, className = '' }) {
  const badge = PLATFORM_BADGES[platform] || PLATFORM_BADGES.all
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${badge.bg} ${badge.text} ${badge.border} ${className}`}>
      {badge.label}
    </span>
  )
}

export function CategoryBadge({ category, className = '' }) {
  const badge = CATEGORY_BADGES[category] || { label: category, bg: 'bg-gray-700', text: 'text-gray-300', border: 'border-gray-600' }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold border ${badge.bg} ${badge.text} ${badge.border} ${className}`}>
      {badge.label}
    </span>
  )
}

export function DiscountBadge({ percent, className = '' }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-500 text-white ${className}`}>
      -{percent}%
    </span>
  )
}

export function StarRating({ rating, className = '' }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="text-yellow-400 text-sm">★</span>
      <span className="text-white text-sm font-semibold">{rating?.toFixed(1)}</span>
    </div>
  )
}

export function LoadingGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-gray-800 rounded-xl overflow-hidden animate-pulse">
          <div className="h-48 bg-gray-700" />
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-700 rounded w-3/4" />
            <div className="h-3 bg-gray-700 rounded w-1/2" />
            <div className="h-3 bg-gray-700 rounded w-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      {Icon && <Icon className="w-16 h-16 text-gray-600 mb-4" />}
      <h3 className="text-xl font-semibold text-gray-300 mb-2">{title}</h3>
      <p className="text-gray-500 max-w-sm">{description}</p>
    </div>
  )
}
