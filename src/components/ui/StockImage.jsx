import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

/**
 * Renders a single <img> tag wired up to the strk-img runtime system.
 * Calls ImageHelper.loadImages on mount so the placeholder is replaced
 * with the matching stock image.
 *
 * The query prop should reference IDs of nearby visible text using
 * the `[id]` syntax. IDs are looked up against the page DOM at scan time.
 */
export default function StockImage({
  imgId,
  query,
  ratio = "3x4",
  width = "600",
  alt = "",
  className,
  eager = false,
  ...rest
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
    <span
      ref={ref}
      className={cn("block w-full h-full bg-cream-200", className)}
    >
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        loading={eager ? "eager" : "lazy"}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="block w-full h-full object-cover"
        {...rest}
      />
    </span>
  );
}
