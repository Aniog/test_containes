import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export const loadStrikinglyImages = (container) => {
  if (!container) {
    return undefined
  }

  return ImageHelper.loadImages(strkImgConfig, container)
}
