import { useEffect, useId, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

// Editorial <img> wrapper. Uses the strk-img runtime system to resolve
// warm, on-brand imagery from the descriptive `query` text. Falls back to
// the supplied `src` (e.g. for production images) if provided.
//
// `fill` mode (no aspect ratio) lets the image fill an absolutely-positioned
// parent — useful for hero backgrounds, category tile overlays, etc. In that
// case the container renders as a span with `position: absolute; inset: 0`
// unless overridden via className.
export default function StrkImage({
  query,
  ratio = "3x2",
  width = 800,
  alt = "",
  className,
  imgClassName,
  src,
  fill = false,
  priority = false,
  style,
  ...rest
}) {
  const reactId = useId();
  const safeId = `strk-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const containerRef = useRef(null);

  useEffect(() => {
    if (!query || !containerRef.current) return;
    if (typeof window === "undefined") return;
    const node = containerRef.current;
    const frame = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, node);
      } catch {
        // Silently fall back to src if provided.
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [query]);

  const ratioClass = {
    "1x1": "aspect-square",
    "3x2": "aspect-[3/2]",
    "4x3": "aspect-[4/3]",
    "3x4": "aspect-[3/4]",
    "2x3": "aspect-[2/3]",
    "9x16": "aspect-[9/16]",
    "16x9": "aspect-[16/9]",
  }[ratio] || "aspect-[3/2]";

  const containerBase = fill
    ? "absolute inset-0 block w-full h-full overflow-hidden bg-cream"
    : `block w-full overflow-hidden bg-cream ${ratioClass}`;

  // The build-time image inliner (vite-plugin-strk-img) rewrites `src` to a
  // resolved URL for the build. At runtime in dev, the strk-img runtime
  // populates `src` from the config; if neither is available, the <img>
  // simply has no src (cream-toned background shows through).
  return (
    <span
      ref={containerRef}
      className={cn(containerBase, className)}
      style={style}
    >
      <img
        data-strk-img-id={safeId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        {...(src ? { src } : {})}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
        {...rest}
      />
    </span>
  );
}
