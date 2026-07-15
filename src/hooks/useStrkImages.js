import { useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

export default function useStrkImages(ref) {
  useEffect(() => {
    if (!ref?.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);
}
