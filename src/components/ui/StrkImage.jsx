import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * StrkImage — drops into the strk-img-config.json image system.
 *
 * The system can be left unconfigured (empty config) and the image will
 * fall back to a warm-tone SVG placeholder so the layout never breaks.
 */
export default function StrkImage({
  imgId,
  query,
  ratio = "4x5",
  width = 800,
  alt = "",
  className = "",
  imgClassName = "",
  eager = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return ImageHelper.loadImages(strkImgConfig, el);
  }, [imgId, query]);

  const paddingTop = ratioToPaddingTop(ratio);

  return (
    <div
      ref={ref}
      className={`relative w-full overflow-hidden bg-stone ${className}`}
      style={{ paddingTop }}
    >
      <img
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${imgClassName}`}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        loading={eager ? "eager" : "lazy"}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />
    </div>
  );
}

function ratioToPaddingTop(ratio) {
  switch (ratio) {
    case "1x1":
      return "100%";
    case "3x2":
      return "66.6667%";
    case "2x3":
      return "150%";
    case "4x3":
      return "75%";
    case "4x5":
      return "125%";
    case "3x4":
      return "133.3333%";
    case "16x9":
      return "56.25%";
    case "9x16":
      return "177.7778%";
    default:
      return "125%";
  }
}
