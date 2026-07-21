import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getStrkImageUrl } from "@/lib/imageUrl";

export default function ProductImage({
  product,
  index = 0,
  className,
  alt,
  ratio = "3x4",
  width = 600,
  imgId,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const titleId = `product-title-${product.id}`;
  const descId = `product-desc-${product.id}`;
  const dataId = imgId || `product-img-${product.id}-${index}`;

  return (
    <div ref={containerRef} className={className}>
      <span id={titleId} className="sr-only" aria-hidden="true">
        {product.name}
      </span>
      <span id={descId} className="sr-only" aria-hidden="true">
        {product.category} {product.material}
      </span>
      <img
        data-strk-img-id={dataId}
        data-strk-img={`[${descId}] [${titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={getStrkImageUrl(dataId)}
        alt={alt ?? product.name}
        aria-hidden={alt === "" ? true : undefined}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
