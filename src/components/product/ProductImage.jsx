import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { cn } from "@/lib/utils"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductImage({
  product,
  imageId,
  query,
  ratio = "4x3",
  width = "800",
  className,
  alt,
}) {
  const imageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, imageRef.current)
  }, [imageId, query])

  return (
    <img
      ref={imageRef}
      alt={alt || product.name}
      className={cn("h-full w-full object-cover", className)}
      data-strk-img-id={imageId}
      data-strk-img={query || `[${product.descId}] [${product.titleId}]`}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
    />
  )
}
