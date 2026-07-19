import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export const useImageLoader = (deps = []) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        try {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        } catch (e) {
          console.error('Failed to load images:', e);
        }
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, deps);

  return containerRef;
};

export default useImageLoader;
