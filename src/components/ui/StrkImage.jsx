import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Wraps a tagged <img> in a small component that triggers ImageHelper.loadImages
 * on mount and on re-render. This is meant to be used inside a page-level
 * containerRef strategy.
 */
export default function StrkImage({
  query,
  ratio = "3x4",
  width = 600,
  imgId,
  alt = "",
  className = "",
  onLoad,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current?.parentElement || ref.current);
    });
    return () => window.cancelAnimationFrame(id);
  }, [query, ratio, width]);

  return (
    <img
      ref={ref}
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      onLoad={onLoad}
      className={className}
      {...rest}
    />
  );
}
