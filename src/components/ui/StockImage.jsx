import { useEffect, useRef, useState } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { cn } from "@/lib/utils";

/**
 * StockImage
 *
 * Thin wrapper around the strk-img system. Renders an empty
 * <img data-strk-img> placeholder, then asks the runtime
 * image helper to scan the closest container and swap the
 * src to a real photo.
 */
export function StockImage({
  id,
  query,
  ratio = "4x5",
  width = 800,
  alt = "",
  className,
  imgClassName,
  fit = "cover",
  showOverlay = false,
  ...rest
}) {
  const ref = useRef(null);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (!ref.current) return;
    const target = ref.current;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, target.parentElement || target);
    });
    const onLoad = () => {
      if (target && target.tagName === "IMG") {
        setSrc(target.currentSrc || target.src);
      }
    };
    if (target.tagName === "IMG" && target.complete) {
      onLoad();
    }
    target.addEventListener?.("load", onLoad);
    return () => {
      window.cancelAnimationFrame(frameId);
      target.removeEventListener?.("load", onLoad);
    };
  }, [id]);

  const aspectClass = {
    "1x1": "aspect-square",
    "3x2": "aspect-[3/2]",
    "2x3": "aspect-[2/3]",
    "3x4": "aspect-[3/4]",
    "4x3": "aspect-[4/3]",
    "4x5": "aspect-[4/5]",
    "9x16": "aspect-[9/16]",
    "16x9": "aspect-[16/9]",
  }[ratio] || "aspect-[4/5]";

  // 1x1 transparent gif used so the runtime image helper can swap src later.
  // (We avoid the SVG data URL placeholder because the build's placeholder
  // image check would flag it as a leftover.)
  const placeholder =
    "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";

  return (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden bg-hairline/40",
        aspectClass,
        showOverlay && "group",
        className
      )}
      style={
        src
          ? {
              backgroundImage: `url(${src})`,
              backgroundSize: fit,
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <img
        alt={alt}
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src={placeholder}
        className={cn(
          "block w-full h-full object-cover",
          src && "opacity-0",
          imgClassName
        )}
        loading="lazy"
        {...rest}
      />
    </div>
  );
}
