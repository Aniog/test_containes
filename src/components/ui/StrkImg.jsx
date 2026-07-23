import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getImageUrl } from "@/lib/strkImages";

// Content image wired to the stock-image system. `imgId` must be app-unique.
// `src` is seeded from the build-time-resolved config so the markup never
// carries an unresolved empty placeholder; ImageHelper.loadImages refines it
// at runtime from the live search results.
export default function StrkImg({
  imgId,
  query,
  ratio = "4x3",
  width = 800,
  alt = "",
  className,
  imgClassName,
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
    <img
      ref={ref}
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={getImageUrl(imgId) || undefined}
      className={cn("block h-full w-full object-cover", className, imgClassName)}
      loading="lazy"
    />
  );
}
