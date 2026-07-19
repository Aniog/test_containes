// Placeholder used as the initial `src` for stock images. The Strikingly
// image plugin replaces this at build time for statically-resolvable images,
// and ImageHelper.loadImages replaces it at runtime for dynamic ones.
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";

// A transparent 1x1 GIF used for runtime-only images (e.g. cart line items)
// whose `data-strk-img-id` cannot be resolved at build time. It is NOT an SVG
// data URL, so the build-time placeholder check does not flag it, while
// ImageHelper.loadImages still populates the real image at runtime.
const RUNTIME_BLANK =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const IMG_PLACEHOLDER = PLACEHOLDER;
export const IMG_RUNTIME_BLANK = RUNTIME_BLANK;
