import React from "react";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

// Reuse the pre-resolved product primary image ID baked into strk-img-config.json
// at build time. This avoids an extra stock-image round-trip for cart lines and
// keeps the cart drawer consistent with the product card thumbnails.
const primaryImageId = (productId) => `product-${productId}-1`;

export default function CartLineImage({ item }) {
  const ref = useRef(null);
  const id = primaryImageId(item.id);
  const configEntry = strkImgConfig?.[id];

  useEffect(() => {
    if (!ref.current) return;
    if (!configEntry?.results?.length) return;
    if (ref.current.querySelector(`[data-strk-img-id="${id}"]`)) return;
    const img = document.createElement("img");
    img.alt = item.name;
    img.className = "w-full h-full object-cover";
    img.setAttribute("data-strk-img-id", id);
    img.setAttribute("data-strk-img", configEntry.query);
    img.setAttribute("data-strk-img-ratio", configEntry.ratio || "4x5");
    img.setAttribute("data-strk-img-width", configEntry.width || "400");
    img.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";
    ref.current.appendChild(img);
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [configEntry, id, item.name]);

  if (!configEntry) {
    return (
      <div
        ref={ref}
        className="w-full h-full bg-wash flex items-center justify-center"
        aria-label={item.name}
      />
    );
  }

  return (
    <div
      ref={ref}
      className="w-full h-full bg-wash flex items-center justify-center"
      aria-label={item.name}
    />
  );
}
