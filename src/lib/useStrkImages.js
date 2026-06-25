import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Triggers ImageHelper.loadImages for the given container whenever the
 * effect dependencies change. Useful for tab/filter UIs where image
 * elements appear conditionally.
 */
export function useStrkImages(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef?.current) return undefined;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}