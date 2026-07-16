import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function StockImage({ imgId, query, ratio = '4x3', width = '600', className, alt, textRefs = [] }) {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, imgRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [query]);

  return (
    <img
      ref={imgRef}
      alt={alt || ''}
      className={cn('w-full h-full object-cover', className)}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
    />
  );
}

export function StockBackground({ bgId, query, ratio = '16x9', width = '1600', className, children }) {
  return (
    <div
      className={cn('w-full h-full', className)}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
    >
      {children}
    </div>
  );
}
