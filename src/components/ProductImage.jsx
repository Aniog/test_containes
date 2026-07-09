import { useState } from "react";
import { cn } from "@/lib/utils";
import { getStrkImageUrl } from "@/lib/images";

export function ProductImage({
  product,
  index = 0,
  alt,
  className,
  ratio = "1x1",
  width = 600,
  hover = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const imgId = `${product.id}-img-${index}`;
  const query = `[${product.id}-name]`;

  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={getStrkImageUrl(imgId)}
      alt={alt || product.name}
      onLoad={() => setLoaded(true)}
      className={cn(
        "h-full w-full object-cover transition-opacity duration-700",
        hover && "absolute inset-0 opacity-0 group-hover:opacity-100",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
}
