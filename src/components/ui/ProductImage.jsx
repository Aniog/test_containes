import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductImage({
  imgId,
  query,
  ratio = '4x5',
  width = '600',
  alt = '',
  className = '',
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [query]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
