import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * useImageLoad — invokes ImageHelper.loadImages on the supplied container.
 * The hook re-runs whenever any of the `deps` change, which makes it safe for
 * tabs, filters, modals, and any other state-driven UI.
 */
export default function useImageLoad(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => {
      window.cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
