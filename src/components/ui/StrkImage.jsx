import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

/**
 * Content image using the strk-img system.
 * `query` should reference nearby element IDs, e.g. "[title-id] [desc-id]".
 */
export function StrkImage({
  imgId,
  query,
  ratio = '4x3',
  width = 600,
  alt = '',
  className = '',
  ...rest
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
      alt={alt}
      className={className}
      {...rest}
    />
  )
}

/**
 * Background image element using the strk-bg system.
 */
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
      data-strk-bg-width={width}
      className={className}
      {...rest}
    >
      {children}
    </div>
  )
}

/**
 * Container that triggers strk image loading for its subtree.
 * Wrap any area containing data-strk-img / data-strk-bg elements.
 * `deps` controls when to re-scan (e.g. when conditional images change).
 */
export function StrkImageContainer({ as: Tag = 'div', children, deps = [], className = '', ...rest }) {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
