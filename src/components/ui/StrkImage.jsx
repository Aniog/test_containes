import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

/**
 * Stock image element driven by the strk-img tag system.
 * Important: this component only renders the tag. The container that
 * wraps it must be passed to ImageHelper.loadImages so the helper can
 * scan it after mount.
 */
export function StrkImage({
  imgId,
  query,
  ratio = "3x2",
  width = 1200,
  alt,
  className,
  loading = "lazy",
  imgWidth,
  imgHeight,
  sizes,
}) {
  return (
    <img
      alt={alt || ""}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      loading={loading}
      decoding="async"
      width={imgWidth}
      height={imgHeight}
      sizes={sizes}
      className={cn(
        "block w-full h-full object-cover bg-brand-mist",
        className
      )}
    />
  );
}

/**
 * Hook helper: call ImageHelper.loadImages against a container ref.
 * Returns the cleanup function so callers can wire it into useEffect.
 */
export function useStrkImages(containerRef, deps = []) {
  useEffect(() => {
    const handle = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(handle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * Background stock image element. Renders a div that gets its background
 * populated by ImageHelper.loadImages. Use inside a scanned container.
 */
export function StrkBackground({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className,
  children,
}) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
    >
      {children}
    </div>
  );
}
