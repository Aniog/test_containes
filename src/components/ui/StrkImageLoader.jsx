import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * StrkImageLoader — mounts a stable ref on its children subtree and
 * triggers the runtime stock image system scan on mount and whenever
 * the dependency array changes (e.g. for tabs/filters/pagination).
 */
export default function StrkImageLoader({ deps = [], as: Tag = "div", className, children, ...props }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => {
      window.cancelAnimationFrame(id);
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      if (typeof cleanup === "function") cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return (
    <Tag ref={containerRef} className={className} {...props}>
      {children}
    </Tag>
  );
}
