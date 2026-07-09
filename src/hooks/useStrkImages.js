import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export { PLACEHOLDER }

/**
 * Wraps a section and triggers ImageHelper.loadImages whenever `deps`
 * change (e.g. tab/filter/route state that mounts new tagged images).
 * Attach the returned ref to a stable parent that contains all
 * data-strk-img / data-strk-bg elements for this section.
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
