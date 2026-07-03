import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

/**
 * A <img> that asks the Strikingly stock-image system for a real photograph
 * matching the given `query` and renders it at the requested aspect ratio.
 *
 * The actual <img> is rendered server-side too (well, in JSX), and the
 * Vite plugin pre-resolves a photo at build/dev time and writes it to
 * strk-img-config.json. At runtime ImageHelper.loadImages swaps the
 * placeholder src for the real photo.
 */
export default function StockImage({
  id,
  query,
  ratio = "4x5",
  width = 800,
  alt,
  className,
  imgClassName,
  eager = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [query, id]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden bg-wash", className)}
      style={{ aspectRatio: ratio.replace("x", " / ") }}
      data-strk-img-wrapper
    >
      <img
        alt={alt || query}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={cn(
          "absolute inset-0 w-full h-full object-cover",
          imgClassName,
        )}
      />
    </div>
  );
}
