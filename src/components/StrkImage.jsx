import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * StrkImage — content image backed by the strk-img stock system.
 * `query` should reference DOM element IDs, e.g. "[title-id] [desc-id]".
 * Self-loads via ImageHelper on mount so it works regardless of parent wiring.
 *
 * NOTE: `src` MUST be an inline string literal (not a const reference) so the
 * build-time inliner's `literalSrcFallback` can resolve it and replace it with
 * the resolved stock image URL / dynamic helper.
 */
export default function StrkImage({
  imgId,
  query,
  ratio = '4x3',
  width = 600,
  alt = '',
  className = '',
  ...rest
}) {
  const imgRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, imgRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [imgId, query, ratio, width])

  return (
    <img
      ref={imgRef}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={alt}
      className={className}
      loading="lazy"
      {...rest}
    />
  )
}

/**
 * StrkBg — background image backed by the strk-img stock system.
 * Self-loads via ImageHelper on mount.
 */
export function StrkBg({ bgId, query, ratio = '16x9', width = 1600, className = '', children, ...rest }) {
  const bgRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, bgRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [bgId, query, ratio, width])

  return (
    <div
      ref={bgRef}
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
