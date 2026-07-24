import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

// The SDK's loadImages attaches a MutationObserver to the container, so any
// data-strk-img / data-strk-bg elements mounted later (drawers, tabs, filters)
// are picked up automatically. One observer at the app root covers everything.
export function useStrkImages() {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return undefined
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return ref
}
