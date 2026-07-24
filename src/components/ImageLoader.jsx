import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

/**
 * Scans its child container for data-strk-img / data-strk-bg slots and
 * populates them with real images. Re-runs whenever `deps` change so that
 * conditionally rendered images (tabs, filters, modals) get loaded too.
 */
export default function ImageLoader({ children, deps = [], className }) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
