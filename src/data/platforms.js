export const PLATFORMS = [
  { id: 'all', label: 'All Platforms', color: '#6366f1', bg: 'bg-indigo-500' },
  { id: 'steam', label: 'Steam', color: '#1b2838', bg: 'bg-[#1b2838]', accent: '#66c0f4' },
  { id: 'epic', label: 'Epic Games', color: '#2d2d2d', bg: 'bg-gray-800', accent: '#ffffff' },
  { id: 'nintendo', label: 'Nintendo', color: '#e4000f', bg: 'bg-red-600', accent: '#ffffff' },
  { id: 'playstation', label: 'PlayStation', color: '#003087', bg: 'bg-blue-800', accent: '#00439c' },
  { id: 'xbox', label: 'Xbox', color: '#107c10', bg: 'bg-green-700', accent: '#52b043' },
]

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'news', label: 'News' },
  { id: 'blog', label: 'Blog' },
  { id: 'review', label: 'Reviews' },
  { id: 'article', label: 'Articles' },
]

export const getPlatform = (id) => PLATFORMS.find(p => p.id === id) || PLATFORMS[0]

export const PLATFORM_ICONS = {
  steam: '🎮',
  epic: '⚡',
  nintendo: '🎯',
  playstation: '🎮',
  xbox: '🟢',
  all: '🌐',
}
