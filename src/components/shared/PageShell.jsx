import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

/**
 * PageShell wraps a page and triggers the stock image system for any
 * `data-strk-img` / `data-strk-bg` elements rendered inside it.
 *
 * The container ref must wrap all tagged elements (including any conditional
 * ones) so that ImageHelper.loadImages can scan them on mount.
 */
export default function PageShell({ children, className }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frame = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      } catch (err) {
        // Non-fatal: page still renders if the image helper fails.
        // eslint-disable-next-line no-console
        console.warn("[strk-img] loadImages failed:", err)
      }
    })
    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}