export const PLATFORM_CONFIG = {
  steam: {
    label: 'Steam',
    bg: 'bg-[#1b2838]',
    text: 'text-[#66c0f4]',
    border: 'border-[#66c0f4]/30',
    dot: 'bg-[#66c0f4]',
  },
  epic: {
    label: 'Epic',
    bg: 'bg-[#2d2d2d]',
    text: 'text-white',
    border: 'border-white/20',
    dot: 'bg-white',
  },
  nintendo: {
    label: 'Nintendo',
    bg: 'bg-red-700',
    text: 'text-white',
    border: 'border-red-400/30',
    dot: 'bg-red-400',
  },
  playstation: {
    label: 'PlayStation',
    bg: 'bg-blue-900',
    text: 'text-white',
    border: 'border-blue-400/30',
    dot: 'bg-blue-400',
  },
  xbox: {
    label: 'Xbox',
    bg: 'bg-green-800',
    text: 'text-white',
    border: 'border-green-400/30',
    dot: 'bg-green-400',
  },
  general: {
    label: 'General',
    bg: 'bg-[#1f2235]',
    text: 'text-slate-300',
    border: 'border-slate-500/30',
    dot: 'bg-slate-400',
  },
  multi: {
    label: 'Multi-Platform',
    bg: 'bg-purple-900',
    text: 'text-purple-200',
    border: 'border-purple-400/30',
    dot: 'bg-purple-400',
  },
}

export function PlatformBadge({ platform, size = 'sm' }) {
  const cfg = PLATFORM_CONFIG[platform] || PLATFORM_CONFIG.general
  const sizeClass = size === 'xs' ? 'text-xs px-1.5 py-0.5' : 'text-xs px-2.5 py-1'
  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border} ${sizeClass}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  )
}

export function CategoryBadge({ category }) {
  const colors = {
    news: 'bg-[#4f8ef7]/20 text-[#4f8ef7] border-[#4f8ef7]/30',
    blog: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    review: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    guide: 'bg-green-500/20 text-green-400 border-green-500/30',
  }
  const labels = { news: 'News', blog: 'Blog', review: 'Review', guide: 'Guide' }
  return (
    <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border ${colors[category] || colors.news}`}>
      {labels[category] || category}
    </span>
  )
}

export function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-slate-600'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-slate-400 text-xs ml-1">{rating?.toFixed(1)}</span>
    </div>
  )
}

export function DiscountBadge({ percent }) {
  if (!percent || percent === 0) return null
  const color = percent >= 75 ? 'bg-red-500' : percent >= 50 ? 'bg-orange-500' : 'bg-green-600'
  return (
    <span className={`${color} text-white text-xs font-black px-2 py-0.5 rounded`}>
      -{percent}%
    </span>
  )
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-10 h-10 border-2 border-[#2a2d3e] border-t-[#4f8ef7] rounded-full animate-spin" />
    </div>
  )
}

export function SectionHeader({ title, subtitle, action }) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        {subtitle && <p className="text-slate-400 mt-1 text-sm">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
