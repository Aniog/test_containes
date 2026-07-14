import { useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const fallbackImages = [
  'linear-gradient(135deg, rgba(33,26,22,0.12), rgba(181,132,72,0.18))',
  'linear-gradient(135deg, rgba(246,241,232,0.86), rgba(181,132,72,0.22))',
  'linear-gradient(135deg, rgba(93,72,61,0.2), rgba(33,26,22,0.1))',
]

function applyFallbacks(container) {
  if (!container) return
  container.querySelectorAll('img[data-strk-img]').forEach((img, index) => {
    img.style.background = fallbackImages[index % fallbackImages.length]
  })
  container.querySelectorAll('[data-strk-bg]').forEach((element, index) => {
    if (!element.style.backgroundImage) {
      element.style.backgroundImage = fallbackImages[index % fallbackImages.length]
    }
  })
}

export function useStrkImages(containerRef, deps = []) {
  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      applyFallbacks(containerRef.current)
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, deps)
}

export const imagePlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
