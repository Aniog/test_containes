import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Calls ImageHelper.loadImages on the given ref's container.
 * Pass a deps array of state values that, when changed, may cause
 * new data-strk-img / data-strk-bg elements to be rendered.
 */
export default function useImageLoader(ref, deps = []) {
  useEffect(() => {
    if (!ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
