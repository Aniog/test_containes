import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Mounts ImageHelper.loadImages on the given ref. Re-runs when `deps` change
 * (e.g. when filters, tabs, or modals reveal new tagged elements).
 */
export function useStrkImages(ref, deps = []) {
  useEffect(() => {
    if (!ref || !ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      ImageHelper.disconnect(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
