import React from "react";
import { cn } from "@/lib/utils";

/**
 * Stock image element. Uses data-strk-img and a transparent SVG placeholder
 * until the runtime interpreter populates a real image URL.
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "4x5",
  width = 800,
  alt = "",
  className = "",
  imgClassName = "",
  bg = false,
}) {
  const ratioClass = {
    "3x2": "aspect-[3/2]",
    "16x9": "aspect-[16/9]",
    "4x3": "aspect-[4/3]",
    "1x1": "aspect-square",
    "3x4": "aspect-[3/4]",
    "9x16": "aspect-[9/16]",
    "2x3": "aspect-[2/3]",
  }[ratio] || "aspect-[4/5]";

  if (bg) {
    return (
      <div
        className={cn(ratioClass, className)}
        data-strk-bg-id={imgId}
        data-strk-bg={query}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={String(width)}
        aria-label={alt}
        role="img"
      />
    );
  }

  return (
    <div className={cn("relative w-full overflow-hidden bg-sand-100", ratioClass, className)}>
      <img
        alt={alt}
        className={cn(
          "absolute inset-0 h-full w-full object-cover editorial-transition",
          imgClassName
        )}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        loading="lazy"
      />
    </div>
  );
}
