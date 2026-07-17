import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

// Scans a container for data-strk-img / data-strk-bg slots and fills them.
// Re-runs when `deps` change so conditionally rendered images (tabs, modals,
// route changes) get populated too.
export function useStrkImages(deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
