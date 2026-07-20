import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const BackgroundImage = ({ imgId, query, ratio = "16x9", width = 1200, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      data-strk-bg={query}
      data-strk-bg-id={imgId}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    />
  );
};

export default BackgroundImage;
