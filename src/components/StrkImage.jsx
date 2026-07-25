import { PLACEHOLDER_IMG } from "@/data/products"
import { cn } from "@/lib/utils"

/**
 * Stock-image-tagged <img>. The Vite strk-img plugin resolves the query
 * against the referenced text ids and swaps in a real photo at runtime.
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
  return (
    <img
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
