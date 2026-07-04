import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

/**
 * StrkImage — wraps a stock <img> tag using the data-strk-img pipeline.
 * - `imgId` is the globally-unique id for the image element (use `${product.id}-...` style).
 * - `query` is the search string; can reference other element ids with [id-name].
 * - `ratio` and `width` set the requested size.
 *
 * `scopeRef` is the stable container ref whose subtree should be scanned.
 * If omitted, this component will scan its own root and the effect will re-run
 * whenever the query/imgId changes (so a single StrkImage works in isolation).
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "4x5",
  width = 900,
  alt = "",
  className,
  scopeRef,
  eager = false,
  ...rest
}) {
  const localRef = useRef(null);
  const targetRef = scopeRef || localRef;

  useEffect(() => {
    if (!targetRef.current) return undefined;
    if (eager) {
      // Trigger scan immediately, no rAF wait.
      return ImageHelper.loadImages(strkImgConfig, targetRef.current);
    }
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, targetRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [imgId, query, eager, targetRef]);

  return (
    <img
      ref={scopeRef ? undefined : localRef}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={alt}
      className={cn("block w-full h-full object-cover", className)}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
}
