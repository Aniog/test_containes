import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { PLACEHOLDER_IMG } from "@/data/products"
import { cn } from "@/lib/utils"
import strkImgConfig from "@/strk-img-config.json"

/**
 * Stock-image-tagged <img>. The Vite strk-img plugin resolves the query
 * against the referenced text ids and swaps in a real photo at runtime.
 * Self-loads via ImageHelper so it works regardless of the surrounding tree.
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = "800",
  alt = "",
  className,
  loading = "lazy",
}) {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <img
      ref={ref}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER_IMG}
      alt={alt}
      loading={loading}
      draggable={false}
      className={cn("object-cover", className)}
    />
  )
}
