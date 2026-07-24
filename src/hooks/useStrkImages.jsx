import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function useStrkImages(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, deps)

  return ref
}

export function StrkImageContainer({ children, deps = [], className }) {
  const ref = useStrkImages(deps)
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
