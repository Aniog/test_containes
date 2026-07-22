import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export function resolveStrkImageUrl(imgId) {
  const entry = strkImgConfig[imgId];
  const results = entry?.results;
  if (!Array.isArray(results) || results.length === 0) return "";
  if (entry.picked) {
    const picked = results.find((r) => String(r.id) === String(entry.picked));
    if (picked?.url) return picked.url;
  }
  return results[0]?.url || "";
}

export function productImageQuery(product, view) {
  const base = `[prod-${product.id}-name] [prod-${product.id}-desc]`;
  const suffix = {
    primary: "studio product photography on neutral warm background",
    hover: "close-up worn on model warm editorial lighting",
    detail: "macro detail texture close-up of gold jewelry",
    lifestyle: "lifestyle flat lay on linen with warm sunlight",
  };
  return `${base} ${suffix[view] || suffix.primary}`;
}

export default function StockImage({
  imgId,
  query,
  ratio = "4x3",
  width = 800,
  alt = "",
  className = "",
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [imgId]);

  return (
    <img
      ref={ref}
      src={resolveStrkImageUrl(imgId)}
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      loading="lazy"
      {...rest}
    />
  );
}
