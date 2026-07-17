import { PLACEHOLDER_IMG } from "@/data/products";
import { cn } from "@/lib/utils";

/**
 * Stock image element wired to the Strikingly image system.
 * The query string should reference nearby text element ids, e.g. "[title-id] [desc-id]".
 */
export function StrkImg({
  imgId,
  query,
  ratio = "3x4",
  width = "800",
  alt = "",
  className,
  loading = "lazy",
}) {
  return (
    <img
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={PLACEHOLDER_IMG}
      alt={alt}
      loading={loading}
      className={cn("object-cover w-full h-full", className)}
    />
  );
}
