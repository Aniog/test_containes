import React, { useLayoutEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { strkSrc } from '@/lib/strk-src'

// Registers itself with the stock image system before paint, since cart items
// mount inside the drawer in the same commit the drawer scan runs. The `src`
// is resolved up-front from the config so a concrete CDN URL is rendered.
export default function CartThumb({ id, query, ratio = '3x4', width = 200, alt = '' }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (!ref.current) return undefined
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <img
      ref={ref}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={strkSrc(id)}
      alt={alt}
      className="h-full w-full object-cover"
    />
  )
}
