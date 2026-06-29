// Safe ImageHelper fallback — works with or without @strikingly/sdk
// Provides a no-op loadImages so the app renders even if the SDK is missing.

export const ImageHelper = {
  loadImages() {
    // Returns a cleanup function, same signature as the real SDK
    return () => {}
  },
}
