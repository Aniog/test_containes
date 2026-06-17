import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const AVATAR_COLORS = [
  'bg-red-500', 'bg-orange-500', 'bg-amber-500', 'bg-yellow-500',
  'bg-lime-500', 'bg-green-500', 'bg-teal-500', 'bg-cyan-500',
  'bg-blue-500', 'bg-indigo-500', 'bg-violet-500', 'bg-purple-500',
  'bg-pink-500', 'bg-rose-500',
]

export function getAvatarColor(name = '') {
  const code = (name.charCodeAt(0) || 0) % AVATAR_COLORS.length
  return AVATAR_COLORS[code]
}

export const COUNTRY_NAMES = {
  HK: 'Hong Kong', JP: 'Japan', GB: 'United Kingdom', DE: 'Germany',
  US: 'United States', CN: 'China', AU: 'Australia', CA: 'Canada',
  FR: 'France', IT: 'Italy', ES: 'Spain', KR: 'South Korea',
  SG: 'Singapore', TW: 'Taiwan', IN: 'India', BR: 'Brazil',
}

export function getCountryName(code) {
  return COUNTRY_NAMES[code?.toUpperCase()] || code || ''
}
