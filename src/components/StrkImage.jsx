import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

/**
 * Content image backed by the Strikingly stock image system.
 * `query` should reference element IDs via [id] interpolation.
 */
export function StrkImage({
  imgId,
  query,
  ratio = '4x3',
  width = 600,
  alt = '',
  className,
  imgClassName,
}) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
        className={cn('h-full w-full object-cover', imgClassName)}
      />
    </div>
  )
}

/**
 * Background image backed by the Strikingly stock image system.
 */
export function StrkBg({
  bgId,
  query,
  ratio = '16x9',
  width = 1600,
  className,
  children,
}) {
  return (
    <div
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={className}
    >
      {children}
    </div>
  )
}

/**
 * Hook to trigger image loading for a container. Re-runs when `deps` change.
 */
export function useStrkImages(deps = []) {
  const ref = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return ref
}
