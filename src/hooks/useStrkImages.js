import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Triggers the runtime image loader for tagged images inside `containerRef`.
 * Pass `dependencies` to rerun after React renders new tagged children
 * (e.g. tab switches, category filters, modal mounts).
 */
export function useStrkImages(containerRef, dependencies = []) {
  useEffect(() => {
    if (!containerRef?.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => {
      window.cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, ...dependencies]);
}
