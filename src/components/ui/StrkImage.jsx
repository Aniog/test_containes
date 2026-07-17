import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * StrkImage — wraps a data-strk-img <img>. Scans its subtree on mount for any
 * data-strk-img / data-strk-bg elements and replaces them with stock photos.
 *
 * Place one of these around any component that renders the strk image tags.
 */
export function StrkImage({ children, as: Tag = "div", className, deps = [], ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    // requestAnimationFrame ensures children are committed before scan.
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      ImageHelper.disconnect(node);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}

export default StrkImage;
