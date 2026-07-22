import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function loadImages(container) {
  if (!container) return () => {};
  return ImageHelper.loadImages(strkImgConfig, container);
}
