import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * StockImage — wraps a <img data-strk-img-* …/> element and triggers the
 * interpreter through the shared helper imported from the SDK.
 *
 * Why a container ref pattern?
 *   ImageHelper.loadImages only scans the DOM subtree passed in. Putting the
 *   ref on a stable parent that always contains the rendered <img> means the
 *   image is populated even if React unmounts/remounts the node.
 */
const StockImage = React.forwardRef(function StockImage(
  {
    imgId,
    query,
    ratio = "4x5",
    width = 800,
    alt = "",
    className = "",
    eager = false,
    background = false,
  },
  forwardedRef
) {
  const localRef = useRef(null);
  const ref = forwardedRef || localRef;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!eager) return;
    return ImageHelper.loadImages(strkImgConfig, node);
  }, [eager, ref, imgId, query]);

  if (background) {
    return (
      <div
        ref={ref}
        role="img"
        aria-label={alt}
        data-strk-bg-id={imgId}
        data-strk-bg={query}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={width}
        className={className}
      />
    );
  }

  return (
    <img
      ref={ref}
      alt={alt}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
    />
  );
});

export default StockImage;
