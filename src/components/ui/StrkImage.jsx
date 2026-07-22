import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

/**
 * StrkImage renders an <img> tagged for the runtime stock image system.
 * The plugin requires data-strk-img-* attributes on an <img> tag, so the
 * <img> IS the root. The containerRef prop is ignored; this component is
 * self-contained.
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "1x1",
  width = 800,
  alt = "",
  className,
  eager = false,
  imgClassName,
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, rootRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [imgId, query]);

  return (
    <img
      ref={rootRef}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      className={cn(
        "w-full h-full object-cover transition-opacity duration-500 opacity-0",
        "strk-img-inner",
        className,
        imgClassName
      )}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  );
}
