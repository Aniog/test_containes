import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Attaches a container ref and triggers the stock-image loader whenever
 * the provided deps change (after React has committed the DOM).
 */
export function useStrkImages(deps = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    let cleanup;
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => {
      window.cancelAnimationFrame(frameId);
      if (typeof cleanup === "function") cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}
