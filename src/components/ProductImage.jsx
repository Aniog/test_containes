import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function ProductImage({
  product,
  index = 0,
  className = "",
  ratio = "3x4",
  width = "600",
  imgId,
}) {
  const containerRef = useRef(null);
  const id = imgId || `product-${product.id}-img-${index}`;
  const titleId = `product-${product.id}-title`;
  const descId = `product-${product.id}-desc`;

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <img
        data-strk-img-id={id}
        data-strk-img={`[${descId}] [${titleId}] ${product.category} jewelry gold elegant`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={product.displayName}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <span id={titleId} className="sr-only">
        {product.displayName}
      </span>
      <span id={descId} className="sr-only">
        {product.description}
      </span>
    </div>
  );
}
