import { cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

/**
 * Content image wired to the strk stock-image system.
 * `query` should reference element IDs, e.g. "[title-id] [desc-id]".
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 600,
  alt = "",
  className,
  ...rest
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER}
      alt={alt}
      className={cn("block w-full h-full object-cover", className)}
      {...rest}
    />
  )
}
