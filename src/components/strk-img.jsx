import React, { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

export function StrkImg({
  imgId,
  query,
  ratio,
  width,
  alt,
  className,
  containerClassName,
  priority = false,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [query])

  return (
    <div ref={containerRef} className={cn("relative", containerClassName)}>
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className={cn("h-full w-full object-cover", className)}
      />
    </div>
  )
}

export function StrkBg({
  bgId,
  query,
  ratio,
  width,
  className,
  children,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [query])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div
        data-strk-bg-id={bgId}
        data-strk-bg={query}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={width}
        className="absolute inset-0 -z-10"
      />
      {children}
    </div>
  )
}
