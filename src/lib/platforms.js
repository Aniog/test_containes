export const PLATFORMS = [
  { id: 'all', label: 'All Platforms', color: 'bg-gray-600', textColor: 'text-gray-300' },
  { id: 'steam', label: 'Steam', color: 'bg-[#1b2838]', textColor: 'text-[#66c0f4]', accent: '#66c0f4' },
  { id: 'epic', label: 'Epic Games', color: 'bg-[#2d2d2d]', textColor: 'text-white', accent: '#ffffff' },
  { id: 'nintendo', label: 'Nintendo', color: 'bg-[#e4000f]', textColor: 'text-white', accent: '#ffffff' },
  { id: 'playstation', label: 'PlayStation', color: 'bg-[#003087]', textColor: 'text-white', accent: '#00439c' },
  { id: 'xbox', label: 'Xbox', color: 'bg-[#107c10]', textColor: 'text-white', accent: '#107c10' },
]

export const PLATFORM_BADGES = {
  steam: { label: 'Steam', bg: 'bg-[#1b2838]', text: 'text-[#66c0f4]', border: 'border-[#66c0f4]/30' },
  epic: { label: 'Epic', bg: 'bg-[#2d2d2d]', text: 'text-white', border: 'border-white/20' },
  nintendo: { label: 'Nintendo', bg: 'bg-red-700', text: 'text-white', border: 'border-red-500/30' },
  playstation: { label: 'PlayStation', bg: 'bg-blue-800', text: 'text-white', border: 'border-blue-500/30' },
  xbox: { label: 'Xbox', bg: 'bg-green-800', text: 'text-white', border: 'border-green-500/30' },
  pc: { label: 'PC', bg: 'bg-purple-800', text: 'text-white', border: 'border-purple-500/30' },
  multi: { label: 'Multi', bg: 'bg-gray-700', text: 'text-white', border: 'border-gray-500/30' },
  all: { label: 'All', bg: 'bg-gray-700', text: 'text-white', border: 'border-gray-500/30' },
}

export const CATEGORY_BADGES = {
  news: { label: 'News', bg: 'bg-yellow-500/20', text: 'text-yellow-300', border: 'border-yellow-500/30' },
  article: { label: 'Article', bg: 'bg-blue-500/20', text: 'text-blue-300', border: 'border-blue-500/30' },
  review: { label: 'Review', bg: 'bg-purple-500/20', text: 'text-purple-300', border: 'border-purple-500/30' },
  guide: { label: 'Guide', bg: 'bg-green-500/20', text: 'text-green-300', border: 'border-green-500/30' },
}
