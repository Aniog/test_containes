import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

function useStockImageLoader(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, deps)

  return ref
}

export function StockImage({
  imgId,
  query,
  ratio,
  width,
  alt = "",
  className,
}) {
  const ref = useStockImageLoader([imgId, query, ratio, width])

  return (
    <div ref={ref} className="contents">
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt}
        className={className}
      />
    </div>
  )
}

export function StockBackground({
  bgId,
  query,
  ratio,
  width,
  className,
}) {
  const ref = useStockImageLoader([bgId, query, ratio, width])

  return (
    <div
      ref={ref}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={className}
    />
  )
}
