import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

/**
 * A div that asks the stock-image system for a real photograph and uses it
 * as a background image. Apply a tinted overlay (gradient) on top with
 * absolute-positioned children to keep text readable.
 */
export default function StockBackground({
  id,
  query,
  ratio = "16x9",
  width = 1600,
  className,
  children,
  overlayClassName,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [query, id]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden bg-ink", className)}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
    >
      {overlayClassName && (
        <div className={cn("absolute inset-0", overlayClassName)} />
      )}
      {children && <div className="relative h-full">{children}</div>}
    </div>
  );
}
