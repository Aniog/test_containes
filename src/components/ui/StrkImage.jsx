import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

export default function StrkImage({
  imgId,
  query,
  ratio = "4x3",
  width = 800,
  alt = "",
  className,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [imgId]);

  return (
    <img
      ref={ref}
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      className={cn("h-full w-full object-cover", className)}
      loading="lazy"
      {...rest}
    />
  );
}
