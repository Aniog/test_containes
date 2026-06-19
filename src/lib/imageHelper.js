// Lightweight image helper that gracefully falls back when SDK is unavailable
export function loadImages(config, container) {
  if (!container) return () => {};
  // In a real deployment with the SDK, this would populate images.
  // For preview, we leave placeholders as-is.
  return () => {};
}
