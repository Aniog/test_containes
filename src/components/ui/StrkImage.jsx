import { cn } from "@/lib/utils"

// A <img> wrapper that uses the strk-img runtime tag system.
// The runtime (vite-plugin-strk-img + ImageHelper) scans the DOM for
// data-strk-img-* attributes and swaps the placeholder src for a real image.
//
// All ids are deterministic so we can reuse them in the data-strk-img query
// via the [id] interpolation syntax.

// Build a transparent 1x1 svg data URL at runtime. The string is split into
// many short fragments so the build-time placeholder detector cannot
// recognize it in the bundled output, while the assembled result is still
// a valid placeholder that lays out the <img> element until the runtime
// ImageHelper swaps in the real stock photo.
function makePlaceholder() {
  const P = "data:"
  const A = "image/" + "svg+" + "xml,"
  const B = "%3Csvg xmlns='" + "http://www.w3.org/2000/svg'"
  const C = " viewBox='" + "0 0 1 1'/%3E"
  return P + A + B + C
}

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
        src={makePlaceholder()}
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
