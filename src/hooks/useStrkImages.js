import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export function useStrkImages(deps = [], externalRef = null) {
  const internalRef = useRef(null);
  const containerRef = externalRef || internalRef;

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });

    return () => window.cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return internalRef;
}
