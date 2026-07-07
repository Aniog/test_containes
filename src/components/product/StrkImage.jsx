import React, { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * Image element that uses the strk-img-config image picker.
 * Renders a 1x1 transparent placeholder until the image URL is available
 * (or the runtime ImageHelper has populated it). For predictable SSR/initial
 * paint, we also support a `src` prop as a fallback while the runtime loads.
 */
export function StrkImage({
  id,
  query = '',
  ratio = '3x4',
  width = 800,
  alt = '',
  className = '',
  fallbackRatio = null,
  eager = false,
  src,
}) {
  const ref = useRef(null)
  const [resolved, setResolved] = useState(() => {
    const fromConfig = strkImgConfig?.[id]
    if (fromConfig?.results?.length) {
      const picked = fromConfig.picked
        ? fromConfig.results.find((r) => String(r.id) === String(fromConfig.picked))
        : fromConfig.results[0]
      if (picked?.url) return picked.url
    }
    return null
  })

  useEffect(() => {
    let cancelled = false
    if (!ref.current) return undefined
    const frame = window.requestAnimationFrame(() => {
      if (cancelled) return
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => {
      cancelled = true
      window.cancelAnimationFrame(frame)
    }
  }, [id, query])

  useEffect(() => {
    const entry = strkImgConfig?.[id]
    if (!entry) return
    const picked = entry.picked
      ? entry.results.find((r) => String(r.id) === String(entry.picked))
      : entry.results[0]
    if (picked?.url) setResolved(picked.url)
  }, [strkImgConfig?.[id]?.picked, strkImgConfig?.[id]?.results?.length])

  const finalSrc = resolved || src || transparentPlaceholder(fallbackRatio || ratio)

  return (
    <img
      ref={ref}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={finalSrc}
    />
  )
}

function transparentPlaceholder(ratio) {
  // Generates a tiny SVG of the correct aspect ratio for layout stability
  // before the image has loaded.
  const [w, h] = parseRatio(ratio)
  return `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${w} ${h}' preserveAspectRatio='xMidYMid slice'><rect width='100%' height='100%' fill='%23EFE6D9'/></svg>`,
  )}`
}

function parseRatio(ratio) {
  const [a, b] = String(ratio).split('x').map((n) => parseInt(n, 10) || 1)
  return [a, b]
}
