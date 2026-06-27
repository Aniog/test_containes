import { cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export function ProductImage({
  product,
  className,
  ratio = "4x3",
  width = 600,
  variant = "card",
  alt,
}) {
  const imageId = `velmora-${product.id}-${variant}`
  const searchQuery = `[${product.id}-title]`
  const imageAlt = alt || product.name

  return (
    <img
      data-strk-img-id={imageId}
      data-strk-img={searchQuery}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
      alt={imageAlt}
      className={cn("h-full w-full object-cover", className)}
      loading="lazy"
    />
  )
}
