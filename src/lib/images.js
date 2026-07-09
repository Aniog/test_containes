import strkImgConfig from "@/strk-img-config.json";

const TRANSPARENT_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export function getStrkImageUrl(imageId, fallback = TRANSPARENT_PIXEL) {
  const entry = strkImgConfig?.[imageId];
  const url = entry?.results?.[0]?.url;
  return typeof url === "string" && url.startsWith("http") ? url : fallback;
}
