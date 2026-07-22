import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

/**
 * makeStrkImageLoaderRef
 *
 * Returns a ref callback that triggers the runtime stock image helper to
 * swap inline <img data-strk-img-id="..."> tags with real photos. Use it
 * on a parent container that wraps any conditionally-rendered image
 * elements, and re-run it whenever the dependencies change.
 *
 * Example:
 *   const loaderRef = useRef(null)
 *   useEffect(() => {
 *     return loaderRef.current
 *       ? ImageHelper.loadImages(strkImgConfig, loaderRef.current)
 *       : undefined
 *   }, [activeTab])
 *   return <section ref={loaderRef}>...</section>
 *
 * Inline <img> usage (recommended path):
 *   <img
 *     data-strk-img-id="my-image"
 *     data-strk-img="[section-title] [section-subtitle]"
 *     data-strk-img-ratio="3x4"
 *     data-strk-img-width="1200"
 *     alt="..."
 *   />
 */
export function makeStrkImageLoaderRef(_deps = []) {
  return (node) => {
    if (!node) return
    const frame = requestAnimationFrame(() => {
      const cleanup = ImageHelper.loadImages(strkImgConfig, node)
      if (cleanup) {
        node.__strkCleanup = cleanup
      }
    })
    node.__strkFrame = frame
  }
}

/**
 * Transparent 1x1 PNG — kept exported for ad-hoc use as a non-SVG
 * placeholder that won't trip up static image analysers.
 */
export const PLACEHOLDER_PNG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
