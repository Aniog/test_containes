import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../../strk-img-config.json";
import { cn } from "../../lib/cn.js";

// Renders a single product photo. The actual URL is resolved at runtime
// by ImageHelper based on the data-strk-img attributes; until then we
// display a soft warm placeholder so layout does not collapse.
export default function ProductImage({
  imgId,
  query,
  ratio = "4x5",
  width = 800,
  alt = "",
  className = "",
  imgClassName = "",
  priority = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [imgId, query]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden bg-ink-900",
        ratio === "4x5" && "aspect-[4/5]",
        ratio === "1x1" && "aspect-square",
        ratio === "3x4" && "aspect-[3/4]",
        ratio === "16x9" && "aspect-video",
        ratio === "3x2" && "aspect-[3/2]",
        className
      )}
    >
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          imgClassName
        )}
      />
      {/* Subtle warm gradient underlay so the placeholder reads as
          intentional luxury photography, not a broken image. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/0 via-ink-900/30 to-ink-950/80"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_50%_0%,rgba(212,168,87,0.10),transparent_60%)]"
      />
    </div>
  );
}
