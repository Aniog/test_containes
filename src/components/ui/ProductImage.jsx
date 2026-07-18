import { useEffect, useRef, useState } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

const transparentGif =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

export function ProductImage({
  product,
  ratio = "1x1",
  width = 600,
  className,
  imgClassName,
  variant = "primary",
}) {
  const ref = useRef(null)
  const [loadedPrimary, setLoadedPrimary] = useState(false)
  const [loadedAlt, setLoadedAlt] = useState(false)
  const isAlt = variant === "alt"
  const loaded = isAlt ? loadedAlt : loadedPrimary

  const titleId = `product-title-${product.id}`
  const descId = `product-desc-${product.id}`
  const altDescId = `product-alt-desc-${product.id}`

  const primaryId = `${product.id}-primary-${ratio.replace("x", "-")}`
  const altId = `${product.id}-alt-${ratio.replace("x", "-")}`

  useEffect(() => {
    if (!ref.current) return
    const cleanup = ImageHelper.loadImages(strkImgConfig, ref.current)
    return () => {
      if (typeof cleanup === "function") cleanup()
    }
  }, [])

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-muted", className)}>
      <img
        data-strk-img-id={primaryId}
        data-strk-img={`[${descId}] [${titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={transparentGif}
        alt={product.name}
        aria-hidden={isAlt}
        onLoad={() => setLoadedPrimary(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          isAlt ? "opacity-0" : "opacity-100",
          !loadedPrimary && "opacity-0",
          imgClassName,
        )}
      />
      <img
        data-strk-img-id={altId}
        data-strk-img={`[${altDescId}] [${titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={transparentGif}
        alt={product.name}
        aria-hidden={!isAlt}
        onLoad={() => setLoadedAlt(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          isAlt ? "opacity-100" : "opacity-0",
          !loadedAlt && "opacity-0",
          imgClassName,
        )}
      />
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted via-secondary to-muted" />
      )}
      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={descId} className="sr-only">
        {product.description}
      </span>
      <span id={altDescId} className="sr-only">
        {product.description} — worn look
      </span>
    </div>
  )
}
