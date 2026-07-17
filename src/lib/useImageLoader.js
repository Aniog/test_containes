import { useEffect } from 'react'
import fallbackStrkImgConfig from '@/strk-img-config.json'

const SLOT_SELECTOR = '[data-strk-img-id], [data-strk-bg-id]'

function getPickedResult(entry) {
  const results = entry?.results || []
  if (!results.length) return null
  if (entry?.picked) {
    return results.find((result) => String(result.id) === String(entry.picked)) || results[0]
  }
  return results[0]
}

function optimizeImageUrl(url, width = 1600) {
  if (!url) return ''
  try {
    const nextUrl = new URL(url)
    nextUrl.searchParams.set('w', String(Math.max(800, Number(width) || 1600)))
    nextUrl.searchParams.set('q', '90')
    nextUrl.searchParams.set('fit', 'max')
    nextUrl.searchParams.set('fm', 'jpg')
    return nextUrl.toString()
  } catch {
    return url
  }
}

function applyImageConfig(config, container) {
  if (!config || !container) return

  container.querySelectorAll(SLOT_SELECTOR).forEach((slot) => {
    const isImage = slot.hasAttribute('data-strk-img-id')
    const id = slot.getAttribute(isImage ? 'data-strk-img-id' : 'data-strk-bg-id')
    const entry = config[id]
    const result = getPickedResult(entry)
    if (!result?.url) return

    if (isImage) {
      if (slot.getAttribute('src') !== result.url) {
        slot.style.opacity = '0'
        slot.style.transition = 'opacity 0.6s ease, transform 0.7s ease'
        slot.onload = () => {
          slot.style.opacity = '1'
        }
        slot.setAttribute('src', result.url)
        if (result.alt && !slot.getAttribute('alt')) slot.setAttribute('alt', result.alt)
        if (slot.complete) slot.style.opacity = '1'
      }
      return
    }

    const backgroundUrl = optimizeImageUrl(result.url, entry?.width)
    slot.style.backgroundImage = `url(${backgroundUrl})`
    slot.style.backgroundSize = 'cover'
    slot.style.backgroundPosition = 'center'
  })
}

async function getImageConfig() {
  const fallback = fallbackStrkImgConfig || {}

  try {
    const response = await fetch(`/src/strk-img-config.json?ts=${Date.now()}`, {
      cache: 'no-store',
    })
    if (!response.ok) return fallback
    const liveConfig = await response.json()
    return { ...fallback, ...liveConfig }
  } catch {
    return fallback
  }
}

export function useImageLoader(containerRef, dependencies = []) {
  useEffect(() => {
    if (!containerRef.current) return undefined

    const current = containerRef.current
    let cancelled = false
    let observer = null

    const loadSlots = () => {
      getImageConfig().then((config) => {
        if (!cancelled) applyImageConfig(config, current)
      })
    }

    const frameId = window.requestAnimationFrame(loadSlots)

    if (typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver(loadSlots)
      observer.observe(current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['data-strk-img-id', 'data-strk-bg-id'],
      })
    }

    return () => {
      cancelled = true
      window.cancelAnimationFrame(frameId)
      if (observer) observer.disconnect()
    }
  }, dependencies)
}
