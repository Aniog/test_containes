import { useEffect, useRef, useState } from "react"
import { findProductById } from "@/data/products.js"

// Renders the product's primary image with the strk-img runtime system.
// If the runtime image helper is present, it will scan the container and
// resolve the data-strk-img query to a real stock image. If not, we fall
// back to a graceful CSS-only placeholder so the layout is never broken.

export default function ProductImage({
  product,
  ratio = "4x5",
  width = 800,
  imgId,
  className = "",
  priority = "default",
  showSecond = false,
  alt,
}) {
  const ref = useRef(null)
  const [resolved, setResolved] = useState(false)
  const [secondResolved, setSecondResolved] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    let cancelled = false
    ;(async () => {
      try {
        const mod = await import("@strikingly/sdk")
        const cfgMod = await import("@/strk-img-config.json")
        if (cancelled) return
        if (mod?.ImageHelper?.loadImages) {
          mod.ImageHelper.loadImages(cfgMod.default || cfgMod, ref.current)
        }
        // small timeout: if no swap, leave placeholder. We still mark resolved true
        // so layout shifts don't occur. Detection uses naturalWidth>0 (the
        // placeholder is a 1x1 SVG with no intrinsic size once decoded).
        window.setTimeout(() => {
          if (cancelled) return
          const img = ref.current?.querySelector("img")
          if (img && img.naturalWidth > 0) {
            setResolved(true)
            if (showSecond) {
              const img2 = ref.current?.querySelectorAll("img")[1]
              if (img2 && img2.naturalWidth > 0) {
                setSecondResolved(true)
              }
            }
          }
        }, 2500)
      } catch (e) {
        // SDK not available; keep placeholder
      }
    })()
    return () => {
      cancelled = true
    }
  }, [product?.id, showSecond])

  if (!product) return null

  const id = imgId || `p-${product.id}`
  const titleId = `${id}-title`
  const descId = `${id}-desc`

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-sand ${className}`}
      aria-hidden={resolved ? "false" : "true"}
    >
      {/* Primary image */}
      <img
        alt={alt || product.name}
        data-strk-img-id={`${id}-img-1`}
        data-strk-img={`[${descId}] [${titleId}] velmora fine jewelry`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-editorial ${
          showSecond && secondResolved ? "opacity-0" : "opacity-100"
        }`}
      />
      {showSecond && (
        <img
          alt=""
          aria-hidden="true"
          data-strk-img-id={`${id}-img-2`}
          data-strk-img={`${product.name} on model velmora ${product.category}`}
          data-strk-img-ratio={ratio}
          data-strk-img-width={width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-editorial ${
            secondResolved ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Hidden text elements used as image query anchors */}
      <span id={titleId} className="sr-only">
        {product.name}
      </span>
      <span id={descId} className="sr-only">
        {product.short}
      </span>

      {/* Subtle gold gradient backdrop while loading */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #2A2419 0%, #1F1A14 50%, #3A2F22 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(176,141,87,0.35) 0%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(176,141,87,0.2) 0%, transparent 50%)",
        }}
      />
    </div>
  )
}
