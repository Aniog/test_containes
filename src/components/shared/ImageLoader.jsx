import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ImageLoader = ({ children, deps = [] }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, deps);

  return <div ref={containerRef}>{children}</div>;
};

export default ImageLoader;
