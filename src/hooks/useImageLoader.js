import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function useImageLoader(dependencies = []) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, dependencies);

  return containerRef;
}
