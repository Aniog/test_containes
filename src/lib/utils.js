import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import strkImgConfig from '@/strk-img-config.json'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPrice(value) {
  return `$${Number(value).toFixed(2)}`
}

export function getImageUrl(imgId) {
  const entry = strkImgConfig[imgId]
  return entry?.results?.[0]?.url
}
