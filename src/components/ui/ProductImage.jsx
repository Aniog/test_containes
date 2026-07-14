import React from "react";
import { cn } from "@/lib/utils";

/**
 * Editorial product image using the strk-img stock system.
 * Falls back to a warm gradient placeholder so layout never breaks.
 */
export default function ProductImage({
  product,
  ratio = "4x5",
  width = 800,
  imgIdSuffix = "",
  className,
  imgClassName,
  alt,
}) {
  if (!product) return null;
  const id = `${product.imgId}${imgIdSuffix ? `-${imgIdSuffix}` : ""}`;
  const altText = alt || product.name;
  return (
    <div className={cn("relative overflow-hidden bg-sand", className)}>
      <img
        alt={altText}
        data-strk-img-id={id}
        data-strk-img={`[${product.descId}] [${product.nameId}] Velmora fine jewelry editorial warm gold`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={cn("w-full h-full object-cover", imgClassName)}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
