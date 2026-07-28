import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const StrkBackground = ({
  bgId,
  query,
  ratio = "16x9",
  width = 1600,
  className = "",
}) => {
  const ref = useRef(null);
  useEffect(() => {
    let frame;
    if (ref.current) {
      frame = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, ref.current);
      });
    }
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [bgId, query]);
  return (
    <div
      ref={ref}
      className={className}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
    />
  );
};

export default StrkBackground;
