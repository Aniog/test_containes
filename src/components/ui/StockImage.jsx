import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * A stock image placeholder. The ImageHelper rewrites the `src` attribute
 * at runtime after the parent calls `ImageHelper.loadImages` once.
 *
 * Props:
 *  - query (string): the data-strk-img search query (may include [id] tokens)
 *  - imageId (string): unique id for the image element
 *  - ratio (string): one of "3x2","16x9","4x3","1x1","3x4","9x16","2x3"
 *  - width (number): approximate pixel width
 *  - className (string): extra classes on the <img>
 *  - alt (string)
 */
export default function StockImage({
  query,
  imageId,
  ratio = "3x4",
  width = 900,
  className = "",
  alt = "",
  ...rest
}) {
  const ref = useRef(null);

  // Ensure the underlying <img> keeps a 1x1 placeholder src until the
  // ImageHelper loads the real photo.
  useEffect(() => {
    if (ref.current && !ref.current.getAttribute("src")) {
      ref.current.setAttribute(
        "src",
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      );
    }
  }, []);

  const ratioStyle = useRatioStyle(ratio);

  return (
    <img
      ref={ref}
      data-strk-img-id={imageId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      alt={alt}
      className={className}
      style={ratioStyle}
      {...rest}
    />
  );
}

function useRatioStyle(ratio) {
  // Returns aspectRatio style for known ratios; otherwise undefined.
  const map = {
    "3x2": "3 / 2",
    "16x9": "16 / 9",
    "4x3": "4 / 3",
    "1x1": "1 / 1",
    "3x4": "3 / 4",
    "9x16": "9 / 16",
    "2x3": "2 / 3",
  };
  return map[ratio] ? { aspectRatio: map[ratio] } : undefined;
}