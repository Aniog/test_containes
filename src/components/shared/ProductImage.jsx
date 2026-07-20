import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Image that participates in the strk-img system.
 * - Sets `data-strk-img-id` so the plugin can find / override it.
 * - Sets `src` to a pre-seeded URL as the immediate fallback.
 * - ImageHelper.loadImages replaces `src` when the config has a real result.
 *
 * Wrap a group of these in `<StrkImageProvider>` so the runtime scans once.
 */
export function ProductImage({ id, src, alt, className, ratio = "1x1", width = 800, onLoad, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Trigger the runtime scan on this element.
    const cleanup = ImageHelper.loadImages(strkImgConfig, el);
    return cleanup;
  }, [id]);

  return (
    <img
      ref={ref}
      data-strk-img-id={id}
      src={src}
      alt={alt}
      className={className}
      onLoad={onLoad}
      {...rest}
    />
  );
}
