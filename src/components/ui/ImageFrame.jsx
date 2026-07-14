import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

/**
 * ImageFrame
 * An aspect-ratioed <img> wrapper that:
 *   1. Reserves layout space with the correct aspect ratio (no CLS).
 *   2. Renders a warm gradient background as a fallback so the page reads
 *      beautifully even if the image-search system doesn't return a result.
 *   3. Pipes the project's data-strk-img-* attributes through ImageHelper
 *      so the search system can fill it in at runtime.
 *
 * The `query` prop is a string of bracketed element ids whose textContent
 * the upstream image-search system uses to build the search query. The
 * parent component is responsible for placing those ids on nearby text
 * elements (e.g. the product name, a tagline, or a section heading).
 *
 * Example:
 *   <h2 id="card-vivid-aura-name">Vivid Aura Jewels</h2>
 *   <p  id="card-vivid-aura-tagline">Crystal accent · ear cuff</p>
 *   <ImageFrame
 *     id="card-vivid-aura-img"
 *     query="[card-vivid-aura-tagline] [card-vivid-aura-name]"
 *     ratio="3x4"
 *     width={800}
 *   />
 */
export default function ImageFrame({
  id,
  query = "",
  ratio = "3x4",
  width = 800,
  tone = "warm",
  alt = "",
  className,
  imgClassName,
  children,
  onLoad,
}) {
  const containerRef = useRef(null);
  const [w, h] = ratioToSize(ratio);
  const aspectStyle = { paddingTop: `${(h / w) * 100}%` };

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <figure
      ref={containerRef}
      className={cn(
        "img-frame relative w-full",
        tone === "dark" && "img-frame-dark",
        className
      )}
      style={aspectStyle}
    >
      <img
        alt={alt}
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        loading="lazy"
        decoding="async"
        onLoad={onLoad}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
          imgClassName
        )}
      />
      {children}
    </figure>
  );
}

function ratioToSize(ratio) {
  const m = String(ratio).match(/^(\d+(?:\.\d+)?)\s*[xX]\s*(\d+(?:\.\d+)?)$/);
  if (!m) return [1, 1];
  return [parseFloat(m[1]), parseFloat(m[2])];
}
