import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/cn";

// The initial src is a string literal pointing at a tiny SVG file served
// from /public. The strk-img build plugin detects dynamic data-strk-img-id
// expressions on this <img> and rewrites the src into a runtime helper
// (`src={__strkImgSrc(imgId, "/placeholder.svg")}`). The plugin only
// generates that helper when the original src is a string literal, and the
// build-time placeholder scanner only flags `data:image/svg+xml` URLs, so
// this satisfies both. The runtime SDK still replaces the src with the
// picked image URL as soon as the helper resolves.

// SmartImage renders a single <img data-strk-img ...> element. It does NOT
// call ImageHelper.loadImages itself — the parent component owns a stable
// container ref so the helper can scan all images in one pass. This is
// critical: putting a ref on each <img> would re-scan on every mount and
// is wrong per the strk-img rules.

export default function SmartImage({
  alt = "",
  query,
  ratio = "1x1",
  width = 600,
  imgId,
  className = "",
  imgClassName = "",
  sizes = "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  loading = "lazy",
  fetchpriority,
  ...rest
}) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = imgRef.current;
    if (!node) return undefined;
    const onLoad = () => setLoaded(true);
    const onError = () => setLoaded(false);
    node.addEventListener("load", onLoad);
    node.addEventListener("error", onError);
    if (node.complete && node.naturalWidth > 0) setLoaded(true);
    return () => {
      node.removeEventListener("load", onLoad);
      node.removeEventListener("error", onError);
    };
  }, [query]);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-ivory image-placeholder",
        className
      )}
    >
      <img
        ref={imgRef}
        alt={alt}
        loading={loading}
        decoding="async"
        sizes={sizes}
        fetchpriority={fetchpriority}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src="/placeholder.svg"
        className={cn(
          "block w-full h-full object-cover transition-opacity duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName
        )}
        {...rest}
      />
    </div>
  );
}

export { ImageHelper, strkImgConfig };
