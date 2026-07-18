import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

// Compact 1x1 image used in the cart drawer.
export default function CartItemImage({ imageQuery, name }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return undefined;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [imageQuery]);

  const imgId = `cart-${name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-${Math.floor(
    Math.random() * 1e6,
  )}`;

  return (
    <div ref={containerRef} className="w-full h-full">
      <img
        alt={name}
        data-strk-img-id={imgId}
        data-strk-img={`[${name}] ${imageQuery}`}
        data-strk-img-ratio="3x4"
        data-strk-img-width="160"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
