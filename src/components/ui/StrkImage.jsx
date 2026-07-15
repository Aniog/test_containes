import { useEffect, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

/**
 * Image — a wrapper around the data-strk-img system.
 * Props:
 *   - id: globally unique ID for the image tag (required)
 *   - query: text query referencing element ids with [bracket] syntax
 *   - ratio: "3x2" | "16x9" | "4x3" | "1x1" | "3x4" | "9x16" | "2x3"
 *   - width: approximate pixel width
 *   - alt: alt text
 *   - className: applied to the rendered <img>
 *   - eager: if true, sets loading="eager" and fetchpriority="high"
 *   - fallback: optional color class for the placeholder background
 */
export default function StrkImage({
  id,
  query,
  ratio = "4x5",
  width = 800,
  alt = "",
  className,
  eager = false,
  fallback = "bg-hairline/60",
  containerClassName,
}) {
  const ref = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden",
        ratioClass(ratio),
        fallback,
        containerClassName,
      )}
    >
      <img
        alt={alt}
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        loading={eager ? "eager" : "lazy"}
        fetchpriority={eager ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-editorial",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
    </div>
  )
}

function ratioClass(ratio) {
  switch (ratio) {
    case "3x2":
      return "aspect-[3/2]"
    case "16x9":
      return "aspect-[16/9]"
    case "4x3":
      return "aspect-[4/3]"
    case "1x1":
      return "aspect-square"
    case "3x4":
      return "aspect-[3/4]"
    case "9x16":
      return "aspect-[9/16]"
    case "2x3":
      return "aspect-[2/3]"
    default:
      return "aspect-[4/5]"
  }
}
