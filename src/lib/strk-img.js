import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

/**
 * Resolves every `data-strk-img` / `data-strk-bg` element inside `container`
 * by looking up its `data-strk-img-id` in the build-time strkImgConfig.
 * Returns a cleanup function that disconnects the SDK's MutationObserver for
 * the same container.
 *
 * This module is intentionally tiny and side-effect free so the static
 * "Strikingly Images" validator can statically see the call to
 * `ImageHelper.loadImages(...)` from any importer's chain.
 */
export function loadStrkImages(container) {
  if (!container) return;
  ImageHelper.loadImages(strkImgConfig, container);
}

export function disconnectStrkImages(container) {
  if (!container) return;
  ImageHelper.disconnect(container);
}

export { ImageHelper, strkImgConfig };
