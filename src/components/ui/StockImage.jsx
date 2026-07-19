import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function StockImage({
  id,
  query,
  ratio,
  width,
  alt,
  className = '',
  containerRef,
}) {
  const localRef = useRef(null);
  const ref = containerRef || localRef;

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [ref, query]);

  return (
    <div ref={ref} className={className}>
      <img
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export function StockBackground({
  id,
  query,
  ratio,
  width,
  className = '',
  children,
  containerRef,
}) {
  const localRef = useRef(null);
  const ref = containerRef || localRef;

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [ref, query]);

  return (
    <div
      ref={ref}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={className}
    >
      {children}
    </div>
  );
}
