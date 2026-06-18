import { useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

// Re-runs ImageHelper.loadImages whenever `deps` change.
// `containerRef` should point to a stable wrapper element that contains
// all data-strk-img / data-strk-bg children.
export function useStrkImages(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef?.current) return undefined;
    const frame = window.requestAnimationFrame(() => {
      try {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      } catch {
        /* image SDK not configured — fall back to placeholder gracefully */
      }
    });
    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
