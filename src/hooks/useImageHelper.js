import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "../strk-img-config.json";

/**
 * useImageHelper — wraps ImageHelper.loadImages for a single container ref.
 *
 * Pass a ref to a stable ancestor that contains the data-strk-img /
 * data-strk-bg elements you want scanned. Pass a dependency array (deps)
 * whenever the rendered set of images depends on React state (filters,
 * pagination, conditional rendering). The hook will re-scan with a
 * requestAnimationFrame after React has committed the new DOM.
 *
 * Pass the same `items` array as deps when iterating over a list — the
 * scan only needs to rerun when the *set* of rendered tags changes, but
 * listing the data makes the dependency obvious to readers.
 */
export function useImageHelper(containerRef, deps = []) {
  useEffect(() => {
    const node = containerRef?.current;
    if (!node) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node);
    });
    return () => window.cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, ...deps]);
}
