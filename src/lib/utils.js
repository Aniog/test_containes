import { clsx } from 'clsx'

export function cn(...inputs) {
  return inputs.filter(Boolean).join(' ')
}

export const PLATFORM_CONFIG = {
  steam: {
    label: 'Steam',
    color: 'text-[#66c0f4]',
    bg: 'bg-[#1b2838]',
    border: 'border-[#66c0f4]/30',
    badge: 'bg-[#1b2838] text-[#66c0f4] border border-[#66c0f4]/40',
    dot: 'bg-[#66c0f4]',
  },
  epic: {
    label: 'Epic',
    color: 'text-white',
    bg: 'bg-[#2d2d2d]',
    border: 'border-white/20',
    badge: 'bg-[#2d2d2d] text-white border border-white/20',
    dot: 'bg-white',
  },
  nintendo: {
    label: 'Nintendo',
    color: 'text-[#e4000f]',
    bg: 'bg-[#1a0000]',
    border: 'border-[#e4000f]/30',
    badge: 'bg-[#1a0000] text-[#e4000f] border border-[#e4000f]/40',
    dot: 'bg-[#e4000f]',
  },
  playstation: {
    label: 'PlayStation',
    color: 'text-[#4a90d9]',
    bg: 'bg-[#00112a]',
    border: 'border-[#4a90d9]/30',
    badge: 'bg-[#00112a] text-[#4a90d9] border border-[#4a90d9]/40',
    dot: 'bg-[#4a90d9]',
  },
  xbox: {
    label: 'Xbox',
    color: 'text-[#52b043]',
    bg: 'bg-[#0a1a0a]',
    border: 'border-[#52b043]/30',
    badge: 'bg-[#0a1a0a] text-[#52b043] border border-[#52b043]/40',
    dot: 'bg-[#52b043]',
  },
  multi: {
    label: 'Multi-Platform',
    color: 'text-violet-400',
    bg: 'bg-violet-900/20',
    border: 'border-violet-500/30',
    badge: 'bg-violet-900/30 text-violet-400 border border-violet-500/30',
    dot: 'bg-violet-400',
  },
  all: {
    label: 'All Platforms',
    color: 'text-slate-300',
    bg: 'bg-slate-800',
    border: 'border-slate-600',
    badge: 'bg-slate-800 text-slate-300 border border-slate-600',
    dot: 'bg-slate-400',
  },
}

export const CATEGORY_CONFIG = {
  news: { label: 'News', color: 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' },
  blog: { label: 'Blog', color: 'bg-violet-500/20 text-violet-400 border border-violet-500/30' },
  review: { label: 'Review', color: 'bg-amber-500/20 text-amber-400 border border-amber-500/30' },
  guide: { label: 'Guide', color: 'bg-green-500/20 text-green-400 border border-green-500/30' },
}
