import React from "react";
import { cn } from "@/lib/utils";

/**
 * Editorial image tile.
 * Uses data-strk-img so the runtime can swap in a real stock photo.
 * Renders a layered gradient + monogram placeholder until that swap happens
 * so the layout never collapses and the editorial mood is preserved.
 */
export default function StrkImage({
  id,
  query,
  ratio = "3x2",
  width = 900,
  alt = "",
  className,
  monogram,
  tone = "dark",
  withShine = true,
  priority = false,
}) {
  const aspect =
    {
      "3x2": "aspect-[3/2]",
      "16x9": "aspect-[16/9]",
      "4x3": "aspect-[4/3]",
      "1x1": "aspect-square",
      "3x4": "aspect-[3/4]",
      "9x16": "aspect-[9/16]",
      "2x3": "aspect-[2/3]",
    }[ratio] || "aspect-[3/2]";

  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        aspect,
        isLight ? "bg-sand" : "bg-espresso",
        className
      )}
    >
      <img
        alt={alt}
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
      {/* Editorial placeholder layered under the data-strk-img */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isLight
            ? "linear-gradient(160deg, #F2EBE0 0%, #ECE3D6 60%, #DCD0BD 100%)"
            : "linear-gradient(160deg, #2C1F19 0%, #1F1612 60%, #15100D 100%)",
        }}
        aria-hidden
      />
      {withShine && (
        <div
          className="absolute inset-0 pointer-events-none mix-blend-screen"
          style={{
            background: isLight
              ? "radial-gradient(circle at 30% 25%, rgba(176,138,74,0.18) 0%, transparent 55%), radial-gradient(circle at 75% 70%, rgba(31,22,18,0.12) 0%, transparent 50%)"
              : "radial-gradient(circle at 30% 25%, rgba(212,178,124,0.35) 0%, transparent 55%), radial-gradient(circle at 75% 75%, rgba(176,138,74,0.25) 0%, transparent 60%)",
          }}
          aria-hidden
        />
      )}
      {monogram && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center pointer-events-none",
            "font-serif tracking-[0.18em] product-title",
            isLight ? "text-espresso/15" : "text-ivory/12"
          )}
          style={{ color: isLight ? "rgba(31,22,18,0.10)" : "rgba(247,242,236,0.10)" }}
          aria-hidden
        >
          <span className="text-[88px] sm:text-[120px]">{monogram}</span>
        </div>
      )}
    </div>
  );
}
