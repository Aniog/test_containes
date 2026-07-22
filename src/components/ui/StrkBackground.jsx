import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

/**
 * StrkBackground renders a div tagged for the runtime background image system.
 * Uses its own root ref so loadImages always scans a mounted DOM container.
 */
export default function StrkBackground({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className,
  children,
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, rootRef.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [bgId, query]);

  return (
    <div
      ref={rootRef}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={cn("absolute inset-0 bg-cover bg-center bg-no-repeat", className)}
    >
      {children}
    </div>
  );
}
