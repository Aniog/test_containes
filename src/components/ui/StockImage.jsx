import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

// A graceful placeholder rendered until the stock image system loads.
// Warm gold on dark — matches the brand mood.
export function WarmPlaceholder({ ratio = "3x4", className = "" }) {
  // Use a soft warm gradient for placeholders. Tuned per aspect.
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden bg-gradient-to-br from-umber via-ink-soft to-ink-deep",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(201,168,117,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(224,199,154,0.10),transparent_60%)]" />
    </div>
  )
}

// Stock image element. Wires up ImageHelper once for the whole subtree.
export default function StockImage({
  imgId,
  query,
  alt = "",
  ratio = "3x4",
  width = 800,
  className = "",
  imgClassName = "",
  eager = false,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    return ImageHelper.loadImages(strkImgConfig, el)
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", className)}
    >
      <WarmPlaceholder ratio={ratio} />
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        loading={eager ? "eager" : "lazy"}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={cn(
          "absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700",
          imgClassName
        )}
      />
    </div>
  )
}
