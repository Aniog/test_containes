import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import { getStrkImageUrl } from "@/lib/imageUrl";

export default function ResolvedImage({
  imgId,
  configId,
  ratio,
  width,
  alt,
  className,
  query,
  children,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [imgId, configId, ratio, width]);

  return (
    <div ref={containerRef} className={className}>
      {children}
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={getStrkImageUrl(configId || imgId)}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
