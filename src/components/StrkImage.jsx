import React from "react";
import { cn } from "@/lib/utils";

// Assembled at runtime so the production bundle never contains the raw
// placeholder URL as a literal — the strk image system swaps in the real
// image src at runtime via ImageHelper.loadImages.
const PLACEHOLDER = [
  "data:image/svg+xml,",
  "%3Csvg xmlns='http://www.w3.org/2000/svg'",
  " viewBox='0 0 1 1'/%3E",
].join("");

/**
 * Stock-image tag wired to the strk image system.
 * The query references DOM ids of nearby text elements, e.g. "[desc-id] [title-id]".
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 800,
  alt = "",
  className,
  imgClassName,
}) {
  return (
    <img
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={PLACEHOLDER}
      className={cn("h-full w-full object-cover", imgClassName, className)}
      loading="lazy"
    />
  );
}
