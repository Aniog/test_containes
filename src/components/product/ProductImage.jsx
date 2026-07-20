import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

// Stock image URLs keyed by image ID. The vite strk-img plugin reads this map
// at build time and rewrites dynamic <img> src attributes to direct URLs.
// If an ID is missing, resolveImgUrl returns the fallback (the empty SVG
// placeholder) which the runtime loader replaces with a configured asset.
const IMG_URLS = {};

function resolveImgUrl(id, fallback) {
  return IMG_URLS[id] || fallback;
}

/**
 * Editorial placeholder for a product image while the stock image is loading.
 * Uses the brand palette and a soft gradient so the layout never feels broken.
 */
function PlaceholderArt({ name, tone = "warm" }) {
  const initial = (name || "V").charAt(0);
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center",
        tone === "deep"
          ? "bg-gradient-to-br from-espresso-soft via-espresso to-espresso-deep"
          : "bg-gradient-to-br from-ivory-deep via-ivory-soft to-ivory"
      )}
    >
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "w-12 h-12 rounded-full mb-3 flex items-center justify-center",
            tone === "deep"
              ? "bg-bronze/15 border border-bronze/30"
              : "bg-espresso/5 border border-espresso/10"
          )}
        >
          <span
            className={cn(
              "font-serif text-2xl",
              tone === "deep" ? "text-bronze-light" : "text-bronze-deep"
            )}
          >
            {initial}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="w-1 h-1 rounded-full bg-bronze/40" />
          <span className="w-1 h-1 rounded-full bg-bronze/60" />
          <span className="w-1 h-1 rounded-full bg-bronze/40" />
        </div>
      </div>
    </div>
  );
}

/**
 * Product image with strk-img system. Renders a tasteful placeholder until the
 * runtime resolves the stock image, and gracefully falls back if the runtime
 * is unavailable.
 */
export default function ProductImage({
  imgId,
  query,
  alt,
  name,
  ratio = "4x5",
  width = 800,
  className,
  tone = "warm",
  priority = false,
  parentRef,
}) {
  const localRef = useRef(null);
  const ref = parentRef || localRef;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!imgId || !query) return;
    let cleanup;
    try {
      cleanup = ImageHelper.loadImages(strkImgConfig, el);
    } catch {
      /* no runtime — show placeholder */
    }
    return cleanup;
  }, [imgId, query, ref]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-ivory-deep",
        ratio === "4x5" && "aspect-[4/5]",
        ratio === "1x1" && "aspect-square",
        ratio === "3x4" && "aspect-[3/4]",
        ratio === "16x9" && "aspect-video",
        className
      )}
    >
      <PlaceholderArt name={name} tone={tone} />
      {imgId && query && (
        <img
          alt={alt}
          data-strk-img-id={imgId}
          data-strk-img={query}
          data-strk-img-ratio={ratio}
          data-strk-img-width={String(width)}
          src={resolveImgUrl(imgId, "")}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-editorial",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}
