import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export function ImageContainer({ children, deps = [], className }) {
  const ref = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, deps);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function StockImg({ id, query, ratio, width, alt, className, style }) {
  return (
    <img
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      alt={alt}
      className={className}
      style={style}
    />
  );
}

export function StockBg({ id, query, ratio, width, className, children }) {
  return (
    <div
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
