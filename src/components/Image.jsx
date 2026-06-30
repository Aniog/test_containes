import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const svgPlaceholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function StrkImage({
  id,
  query,
  ratio,
  width,
  alt,
  className,
  containerRef,
}) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={svgPlaceholder}
    />
  )
}

export function StrkBackground({
  id,
  query,
  ratio,
  width,
  className,
  children,
}) {
  return (
    <div
      className={className}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </div>
  )
}

export function ImageLoader({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return <div ref={ref}>{children}</div>
}
