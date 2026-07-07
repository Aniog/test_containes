import React from "react"
import { cn, resolveImg } from "@/lib/utils"

// Renders an <img> whose src is resolved directly from the pre-populated
// strk-img config. Using a real src (instead of a placeholder + data-strk
// attributes) keeps images working in production builds, where the
// build-time image inliner cannot resolve dynamic data-strk-img-id values.
export default function StrkImage({
  imgId,
  alt = "",
  className,
  imgClassName,
}) {
  return (
    <div className={cn("relative overflow-hidden bg-sand", className)}>
      <img
        alt={alt}
        src={resolveImg(imgId)}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  )
}
