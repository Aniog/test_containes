import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const loadStrikinglyImages = (container) => {
  if (!container) return undefined
  return ImageHelper.loadImages(strkImgConfig, container)
}

export const placeholderSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
