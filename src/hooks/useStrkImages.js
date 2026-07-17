import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function useStrkImages(containerRef, deps = []) {
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, deps);
}
