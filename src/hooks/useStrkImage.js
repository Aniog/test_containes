import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Trigger ImageHelper.loadImages on the given ref. Re-runs when the supplied
 * dependency changes so state-driven renders (filters, tabs) re-scan.
 *
 * Pass `null` for a ref that doesn't exist yet — the hook will safely no-op.
 */
export function useStrkImage(containerRef, deps = []) {
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      const cleanup = ImageHelper.loadImages(strkImgConfig, node);
      // The SDK may return a cleanup; if not, just no-op.
      if (typeof cleanup === "function") {
        // attach to the frame so we can cancel cleanly
        containerRef.current?.dataset.strkCleanup === "true";
      }
    });
    return () => window.cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
