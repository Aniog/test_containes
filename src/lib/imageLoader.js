import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Hook to swap all strk-tagged <img> and background placeholders inside a
 * container for real photos served from the AI image-search API.
 *
 * The helper reads strk-img-config.json (populated at build time) and rewrites
 * each placeholder that lives inside the container subtree.
 */
export function useStrkImages(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef?.current) return;
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => {
      window.cancelAnimationFrame(id);
      ImageHelper.disconnect(containerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
