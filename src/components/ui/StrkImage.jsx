import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

/**
 * Renders an <img> tagged for the runtime image system.
 * Each StrkImage MUST live inside a parent that has been passed to ImageHelper.loadImages
 * (handled at the page / section level by useStrkImageLoader).
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 800,
  alt = "",
  className = "",
  objectFit = "object-cover",
  eager = false,
}) {
  return (
    <img
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={PLACEHOLDER}
      loading={eager ? "eager" : "lazy"}
      className={`block w-full h-full ${objectFit} ${className}`}
    />
  );
}

export function StrkBackground({ id, query, ratio = "16x9", width = 1600, className = "" }) {
  return (
    <div
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={`absolute inset-0 bg-no-repeat bg-cover bg-center ${className}`}
      aria-hidden="true"
    />
  );
}

export function useStrkImageLoader(deps = []) {
  const ref = useRef(null);
  useEffect(() => {
    let frame = 0;
    let cleanup = () => {};
    frame = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, ref.current) || (() => {});
    });
    return () => {
      window.cancelAnimationFrame(frame);
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}
