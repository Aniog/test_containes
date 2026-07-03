import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

// Lightweight wrapper for <img> tags that participate in the
// data-strk-img stock image system. The Vite plugin (`vite-plugin-strk-img`)
// replaces the `src` with a real stock photo URL at build time based on the
// `data-strk-img` query and stores the result in `strk-img-config.json`.
// At runtime we scan the wrapping container so any dynamically mounted
// images (e.g. inside a tab) get populated as well.

export default function StrkImage({
  id,
  query,
  ratio = "4x5",
  width = 1200,
  alt = "",
  className = "",
  imgClassName = "",
  eager = false,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return undefined
    // requestAnimationFrame defers the scan until after React commits the
    // new <img> to the DOM, so the helper sees freshly mounted slots.
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [id, query, ratio, width])

  const placeholder =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

  return (
    <span ref={ref} className={className} style={{ display: "block" }}>
      <img
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src={placeholder}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={imgClassName}
        {...rest}
      />
    </span>
  )
}
