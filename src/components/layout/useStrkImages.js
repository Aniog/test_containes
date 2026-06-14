import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Hook that wires data-strk-img / data-strk-bg elements inside a
 * container ref to the runtime image helper.
 *
 * Usage:
 *   const ref = useStrkImages();
 *   return <section ref={ref}>...</section>;
 */
export function useStrkImages(deps = []) {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}
