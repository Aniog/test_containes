import { cn } from "@/lib/utils"

// A <img> wrapper that uses the strk-img runtime tag system.
// The runtime (vite-plugin-strk-img + ImageHelper) scans the DOM for
// data-strk-img-* attributes and swaps the placeholder src for a real image.
//
// All ids are deterministic so we can reuse them in the data-strk-img query
// via the [id] interpolation syntax.
const placeholderSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function StrkImage({
  imgId,
  query,
  ratio = "3x4",
  width = 800,
  alt,
  className,
  imgClassName,
  style,
  objectFit = "cover",
  ...rest
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-ink/5", className)}
      style={{ aspectRatio: ratio.replace("x", " / "), ...style }}
      {...rest}
    >
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src={placeholderSvg}
        alt={alt || ""}
        loading="lazy"
        decoding="async"
        className={cn(
          "h-full w-full transition-opacity duration-700 ease-editorial",
          objectFit === "cover" ? "object-cover" : "object-contain",
          imgClassName,
        )}
      />
    </div>
  )
}
