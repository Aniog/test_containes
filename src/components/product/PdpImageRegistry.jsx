import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PRODUCTS } from "@/data/products"
import { SVG_PLACEHOLDER } from "@/components/StrkImage"

// Renders (visually hidden) one macro-detail image per product so the build-time
// stock-image plugin can statically resolve every `pdp-{id}-macro` id into the
// shared config. The runtime ImageHelper then swaps real sources in by id.
export function PdpImageRegistry() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef} aria-hidden="true" className="hidden">
      {PRODUCTS.map((product) => {
        const titleId = `registry-${product.id}-title`
        const descId = `registry-${product.id}-desc`
        return (
          <figure key={product.id}>
            <span id={titleId}>{product.name}</span>
            <span id={descId}>{product.short}</span>
            <img
              data-strk-img-id={`pdp-${product.id}-macro-l3m7`}
              data-strk-img={`[${descId}] [${titleId}] extreme macro detail of gold texture and craftsmanship`}
              data-strk-img-ratio="1x1"
              data-strk-img-width="600"
              src={SVG_PLACEHOLDER}
              alt=""
            />
          </figure>
        )
      })}
    </div>
  )
}
