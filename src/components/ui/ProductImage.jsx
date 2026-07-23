import { cn } from "@/lib/utils";

/**
 * ProductImage — wraps the runtime stock image system.
 * All product imagery flows through this component so swap-in real
 * product photography later is as simple as changing the `src` prop.
 */
export default function ProductImage({
  imgId,
  query,
  ratio = "4x5",
  width = 900,
  alt = "",
  className,
  imgClassName,
  eager = false,
  rounded = false,
}) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-ivory-200",
        rounded && "rounded-sm",
        className
      )}
      style={{ aspectRatio: ratio.replace("x", " / ") }}
    >
      <div className="absolute inset-0 shimmer" aria-hidden="true" />
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className={cn("relative h-full w-full object-cover img-fade", imgClassName)}
      />
    </div>
  );
}
