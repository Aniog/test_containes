import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { cn } from "@/lib/utils"

/**
 * A small wrapper that renders a stock image using the data-strk-img-* convention
 * and triggers ImageHelper.loadImages for the surrounding container.
 *
 * The component intentionally renders BOTH the placeholder src and the data-strk-img
 * attributes so the runtime image system can hydrate the element in place.
 */
export default function StockImage({
  id,
  alt,
  query,
  ratio = "4x5",
  width = 800,
  imgClassName = "",
  containerClassName = "",
  groupRef,
}) {
  const localRef = useRef(null)

  useEffect(() => {
    const container = groupRef?.current || localRef.current?.parentElement
    if (!container) return undefined
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, container)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [groupRef, id])

  return (
    <div
      ref={groupRef ? null : localRef}
      className={cn("relative overflow-hidden bg-ivory-soft", containerClassName)}
      style={{ aspectRatio: ratio.replace("x", " / ") }}
    >
      <img
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        alt={alt}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={cn("h-full w-full object-cover", imgClassName)}
        loading="lazy"
      />
    </div>
  )
}