import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

// Background-image surface wired to the stock-image system.
export default function StrkBg({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={ref}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={cn("bg-cover bg-center", className)}
      {...props}
    >
      {children}
    </div>
  );
}
