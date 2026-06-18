import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Wrap any subtree that contains data-strk-img / data-strk-bg elements.
 * Re-runs the loader whenever `deps` changes so dynamic content (filters,
 * tabs, route changes) gets populated.
 */
export default function StrkImageHost({ children, deps = [], className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, ref.current);
      } catch (err) {
        // keep app running even if image system fails
        // eslint-disable-next-line no-console
        console.warn("ImageHelper.loadImages failed", err);
      }
    });
    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
