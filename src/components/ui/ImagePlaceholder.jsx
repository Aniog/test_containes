import { cn } from "@/lib/utils";

// Warm placeholder swatch used while strk-img resolves
const placeholder =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'>
      <defs>
        <radialGradient id='g' cx='35%' cy='30%' r='80%'>
          <stop offset='0%' stop-color='#3D352B'/>
          <stop offset='60%' stop-color='#1A1814'/>
          <stop offset='100%' stop-color='#0F0E0B'/>
        </radialGradient>
      </defs>
      <rect width='1' height='1' fill='url(%23g)'/>
    </svg>`
  );

/**
 * StrkImg — emits the strk-img data attributes used by the runtime
 * `ImageHelper.loadImages(strkImgConfig, containerRef)` call mounted
 * on the parent section / grid container.
 *
 * This component is intentionally passive: it never calls `loadImages`
 * itself. The parent (BestSellers, RelatedProducts, Collection grid,
 * Hero, etc.) owns the containerRef and triggers the scan when the
 * section mounts or its dependency state changes.
 */
export default function StrkImg({
  imgId,
  query,
  ratio = "3x4",
  width = 800,
  alt = "",
  className,
  imgClassName,
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-espresso/95", className)}
      style={{ aspectRatio: ratio.replace("x", " / ") }}
    >
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src={placeholder}
        className={cn("absolute inset-0 h-full w-full object-cover", imgClassName)}
        loading="lazy"
      />
    </div>
  );
}
