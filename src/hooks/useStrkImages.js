import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Attaches a ref to a stable container and loads all data-strk-img /
 * data-strk-bg elements inside it. Re-scans when `deps` change so
 * dynamically mounted images (tabs, galleries, conditionals) are picked up.
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
