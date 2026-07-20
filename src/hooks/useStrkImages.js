import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function useStrkImages() {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [pathname]);

  return ref;
}
