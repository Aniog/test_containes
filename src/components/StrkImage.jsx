import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// Convenience hook: call ImageHelper.loadImages on a container ref.
// Re-runs whenever `deps` change so dynamically rendered images get scanned.
export function useStrkImages(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

// A content image using the strk image system.
export function StrkImage({
  imgId,
  query,
  ratio = '4x3',
  width = 600,
  alt = '',
  className = '',
  as: Tag = 'img',
  ...rest
}) {
  return (
    <Tag
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={PLACEHOLDER}
      alt={alt}
      className={className}
      {...rest}
    />
  )
}

// A background image element using the strk image system.
export function StrkBg({
  bgId,
  query,
  ratio = '16x9',
  width = 1600,
  className = '',
  children,
  ...rest
}) {
  return (
    <div
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={className}
      {...rest}
    >
      {children}
    </div>
  )
}
