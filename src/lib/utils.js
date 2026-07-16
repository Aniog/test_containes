import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function buildPublicAssetUrl(s3Domain, storageKey) {
  if (!storageKey) return ''
  if (storageKey.startsWith('http')) return storageKey
  const base = (s3Domain || '').trim().replace(/\/+$/, '')
  const path = (storageKey || '').trim().replace(/^\/+/, '')
  if (!base || !path) return ''
  return `${base}/${path}`
}
