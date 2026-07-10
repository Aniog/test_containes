import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * Safely load images using ImageHelper.
 * Catches errors to prevent React component crashes.
 */
export function safeLoadImages(container) {
  if (!container) return () => {}
  try {
    return ImageHelper.loadImages(strkImgConfig, container)
  } catch (err) {
    console.warn('ImageHelper.loadImages failed:', err)
    return () => {}
  }
}
