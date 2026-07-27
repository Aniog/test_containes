import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className,
  ...props
}) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <span ref={ref} className="block h-full w-full">
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt}
        className={className}
        {...props}
      />
    </span>
  )
}

export function StrkBackground({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className,
  children,
  ...props
}) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <div
      ref={ref}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

export default StrkImage
