import { cn } from "@/lib/utils";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

/**
 * Stock-image-aware <img> wrapper that emits the data-strk-img-* attributes
 * required by the platform's image system.
 *
 * Usage:
 *   <StrkImage
 *     imgId="img-vivid-aura-1"
 *     query="[product-vivid-aura-blurb] [product-vivid-aura-title]"
 *     ratio="4x5"
 *     width={800}
 *     alt="Vivid Aura Jewels"
 *   />
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "4x5",
  width = 800,
  alt = "",
  className,
  ...rest
}) {
  return (
    <img
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
      className={cn("h-full w-full object-cover", className)}
      {...rest}
    />
  );
}
