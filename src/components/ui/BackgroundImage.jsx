import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BackgroundImage({
  bgId,
  query,
  ratio = '16x9',
  width = '1600',
  className = '',
  children,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [query]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        data-strk-bg-id={bgId}
        data-strk-bg={query}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={width}
        className="absolute inset-0 bg-stone/20"
      />
      {children}
    </div>
  );
}
