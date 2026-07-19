import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
// @ts-ignore — runtime JSON populated by the Vite plugin (may be empty at first load)
import strkImgConfig from "@/strk-img-config.json";

/**
 * Hook that calls ImageHelper.loadImages on a container when it mounts,
 * and re-runs when dependencies change (e.g. tabs/filters).
 *
 * IMPORTANT: container must be a stable parent that wraps all
 * data-strk-img and data-strk-bg elements that should be loaded.
 */
export function useImageLoader(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef.current) return;
    const config = strkImgConfig && Object.keys(strkImgConfig).length
      ? strkImgConfig
      : {};
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(config, containerRef.current);
    });
    return () => {
      window.cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
