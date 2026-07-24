import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Loads stock images for all `data-strk-img` / `data-strk-bg` elements inside
 * the attached container. Re-scans whenever `deps` change (after a rAF so
 * React has committed the new image nodes).
 */
export function useStockImages(deps = []) {
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
