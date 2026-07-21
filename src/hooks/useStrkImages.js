import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Attaches a ref to a stable container and (re)scans it for
 * data-strk-img / data-strk-bg elements whenever `deps` change.
 */
export function useStrkImages(deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    let cleanup;
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (typeof cleanup === "function") cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}

export const IMG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

/**
 * Resolve the CDN URL for a product's primary card image from the
 * statically-built config. Useful for surfaces (cart, mini previews) that
 * render outside the scanned container and therefore can't rely on
 * ImageHelper to populate a runtime data-strk-img element.
 */
export function getProductImageUrl(productId, which = "a1") {
  const entry = strkImgConfig[`card-${productId}-${which}`];
  if (!entry) return null;
  const match = (entry.results || []).find((r) => r.id === entry.picked);
  return match ? match.url : null;
}

/**
 * Resolve the CDN URL for any statically-known strk image id.
 * Returns undefined when the id is not present in the config.
 */
export function getStrkImageUrl(strkId) {
  const entry = strkImgConfig[strkId];
  if (!entry) return undefined;
  const match = (entry.results || []).find((r) => r.id === entry.picked);
  return match ? match.url : undefined;
}
