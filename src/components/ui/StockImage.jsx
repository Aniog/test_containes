import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'

let ImageHelper = null
let sdkPromise = null

async function getImageHelper() {
  if (ImageHelper) return ImageHelper
  if (sdkPromise) return sdkPromise
  sdkPromise = import('@strikingly/sdk')
    .then((sdk) => {
      ImageHelper = sdk.ImageHelper
      return ImageHelper
    })
    .catch(() => null)
  return sdkPromise
}

export function StockImage({
  id,
  query,
  ratio,
  width,
  alt,
  className,
  fill = false,
}) {
  const imgRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    getImageHelper().then((helper) => {
      if (cancelled || !helper || !imgRef.current) return
      return helper.loadImages(strkImgConfig, imgRef.current.parentElement)
    })
    return () => {
      cancelled = true
    }
  }, [])

  const src = fill
    ? undefined
    : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

  return (
    <img
      ref={imgRef}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={src}
      alt={alt}
      className={className}
    />
  )
}

export function StockBackground({
  id,
  query,
  ratio,
  width,
  className,
  children,
}) {
  const bgRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    getImageHelper().then((helper) => {
      if (cancelled || !helper || !bgRef.current) return
      return helper.loadImages(strkImgConfig, bgRef.current)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div
      ref={bgRef}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={className}
    >
      {children}
    </div>
  )
}
