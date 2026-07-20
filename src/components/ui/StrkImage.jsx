import { cn } from "@/lib/utils"
import { resolveStrkImgUrl } from "@/lib/strkImg"

const PLACEHOLDER = ""
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

/**
 * Content image backed by the stock image system.
 *
 * Resolves the image URL directly from the build-time strk-img config because
 * this component receives its imgId/query as runtime props, which the
 * build-time strk-img plugin cannot statically evaluate. Components whose
 * data-strk-* attributes are statically resolvable (Hero, BrandStory, etc.)
 * use ImageHelper.loadImages instead.
 *
 * Props:
 * - imgId: unique id matching a key in strk-img-config.json
 * - query: interpolation query string (kept for API compatibility)
 * - ratio: 3x2 | 16x9 | 4x3 | 1x1 | 3x4 | 9x16 | 2x3
 * - width: approximate pixel width
 * - alt, className
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "4x5",
  width = 600,
  alt = "",
  className,
}) {
  const src = resolveStrkImgUrl(imgId) || PLACEHOLDER

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <img
        alt={alt}
        src={src}
        className="h-full w-full object-cover"
      />
    </div>
  )
}
