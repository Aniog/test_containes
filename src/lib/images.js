import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const placeholderSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function loadImages(container) {
  if (!container) return () => {};
  return ImageHelper.loadImages(strkImgConfig, container);
}
