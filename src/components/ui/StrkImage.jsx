import { cn } from "@/lib/utils"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const RATIO_CLASS = {
  "1x1": "aspect-square",
  "4x5": "aspect-[4/5]",
  "3x4": "aspect-[3/4]",
  "2x3": "aspect-[2/3]",
  "9x16": "aspect-[9/16]",
  "3x2": "aspect-[3/2]",
  "4x3": "aspect-[4/3]",
  "16x9": "aspect-[16/9]",
}

// A content image that uses the strk-img tagging system.
// `query` should reference nearby element IDs, e.g. "[hero-title] [hero-subtitle]".
export function StrkImage({
  imgId,
  query,
  ratio = "4x5",
  width = 800,
  alt = "",
  className,
  imgClassName,
}) {
  return (
    <div className={cn("relative overflow-hidden bg-sand", RATIO_CLASS[ratio], className)}>
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={cn("h-full w-full object-cover fade-img", imgClassName)}
      />
    </div>
  )
}

// A background image element that uses the strk-bg tagging system.
export function StrkBg({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className,
  children,
}) {
  return (
    <div
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={cn("relative bg-sand", className)}
    >
      {children}
    </div>
  )
}
