import React from "react";
import { cn } from "@/lib/utils";

// Content image wired to the Strikingly stock-image system. `imgId` must be
// globally unique. `query` should reference nearby text element ids like
// "[some-id] other words" for contextual relevance. The `src` placeholder is
// written as an inline string literal so the build-time image plugin can
// statically match and replace it with the resolved stock image URL.
export function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 800,
  alt = "",
  className,
  ...props
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={alt}
      loading="lazy"
      className={cn("object-cover", className)}
      {...props}
    />
  );
}

// Background image container wired to the stock-image system.
export function StrkBackground({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className,
  children,
  ...props
}) {
  return (
    <div
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={cn("bg-cover bg-center", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default StrkImage;
