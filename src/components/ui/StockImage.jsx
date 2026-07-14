import { cn } from "@/lib/utils"

const PLACEHOLDER_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3C/svg%3E"

/**
 * StockImage — wraps a runtime-loaded stock image element.
 *
 * The runtime image helper looks for `data-strk-img` attributes and replaces
 * the placeholder with a real image. We always render the placeholder inline
 * so layout doesn't shift while the image loads.
 */
export function StockImage({
  imgId,
  query,
  ratio = "4x5",
  width = 800,
  alt = "",
  className,
  eager = false,
}) {
  return (
    <img
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER_SVG}
      className={cn("block h-full w-full object-cover", className)}
    />
  )
}

const BG_PLACEHOLDER_SVG =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

/** Background stock image — for hero, banner, category tiles. */
export function StockBackground({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className,
}) {
  return (
    <div
      aria-hidden="true"
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={cn("absolute inset-0 h-full w-full bg-cover bg-center", className)}
    />
  )
}
