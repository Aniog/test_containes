import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * StrkImage — content image backed by the Velmora stock-image tag system.
 * Renders a placeholder while the helper resolves the real asset URL.
 */
export function StrkImage({
  imgId,
  query,
  ratio = "3x2",
  width = 800,
  alt = "",
  className = "",
  containerClassName = "",
  loading = "lazy",
  containerRef,
  priority = false,
}) {
  const localRef = useRef(null);
  useEffect(() => {
    const target = containerRef?.current ?? localRef.current;
    if (!target) return undefined;
    return ImageHelper.loadImages(strkImgConfig, target);
  }, [containerRef, query]);

  return (
    <div ref={localRef} className={containerClassName}>
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        loading={priority ? "eager" : loading}
        alt={alt}
        className={className}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
    </div>
  );
}

/**
 * StrkBackground — element with a generated background image.
 * Apply the helper to a stable ancestor that wraps the element.
 */
export function StrkBackground({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className = "",
  containerRef,
  children,
  ariaLabel,
}) {
  const localRef = useRef(null);
  useEffect(() => {
    const target = containerRef?.current ?? localRef.current;
    if (!target) return undefined;
    return ImageHelper.loadImages(strkImgConfig, target);
  }, [containerRef, query]);

  return (
    <div
      ref={localRef}
      aria-label={ariaLabel}
      className={className}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
    >
      {children}
    </div>
  );
}
