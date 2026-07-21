import React from "react"
import { cn } from "@/lib/utils"
import { resolveStockImageUrl } from "@/lib/resolveStockImage"

export function StockImage({
  imgId,
  query,
  ratio = "4x3",
  width = 800,
  alt = "",
  className,
  eager = false,
}) {
  const resolvedSrc = resolveStockImageUrl(imgId)
  if (!resolvedSrc) {
    throw new Error(`StockImage: no resolved image for data-strk-img-id "${imgId}"`)
  }
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={resolvedSrc}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={cn("h-full w-full object-cover", className)}
    />
  )
}

export function StockBackground({ bgId, query, ratio = "16x9", width = 1600, className, children }) {
  const resolvedUrl = resolveStockImageUrl(bgId)
  return (
    <div
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      style={resolvedUrl ? { backgroundImage: `url(${resolvedUrl})` } : undefined}
      className={cn("bg-surface bg-cover bg-center", className)}
    >
      {children}
    </div>
  )
}
