import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export function ProductImage({
  product,
  aspect = "4x3",
  width = 600,
  className,
  alt,
  query,
  imgId,
}) {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const q = query || `[product-${product.id}-desc] [product-${product.id}-name]`

  return (
    <div ref={ref} className={className}>
      <img
        data-strk-img-id={imgId || `product-${product.id}-img`}
        data-strk-img={q}
        data-strk-img-ratio={aspect}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt || product.name}
        className="h-full w-full object-cover"
      />
      <span id={`product-${product.id}-desc`} className="sr-only">
        {product.description}
      </span>
      <span id={`product-${product.id}-name`} className="sr-only">
        {product.name} gold jewelry
      </span>
    </div>
  )
}
