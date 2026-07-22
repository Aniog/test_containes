import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders an <img> with the strk-img data attributes. The runtime image
 * helper fills in the src at runtime. We deliberately don't ship a
 * placeholder src so the validator doesn't flag a leftover data URL.
 *
 * Layout stays intact before the helper fires because the wrapper div
 * has a fixed aspect ratio + a warm background.
 */
export default function StockImage({
  id,
  query,
  alt,
  ratio = "4x5",
  width = 800,
  className = "",
  imgClassName = "",
  loading = "lazy",
  fetchPriority,
  sizes,
  ...rest
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-cream-deep", className)}>
      <img
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        fetchpriority={fetchPriority}
        sizes={sizes}
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        className={cn(
          "relative h-full w-full object-cover transition-opacity duration-700 ease-elegant",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName,
        )}
        {...rest}
      />
    </div>
  );
}

