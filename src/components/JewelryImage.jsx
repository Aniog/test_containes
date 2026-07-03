import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function JewelryImage({
  id,
  query,
  ratio = '1x1',
  width = 600,
  alt = '',
  className = '',
  bg = false,
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  const src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

  if (bg) {
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

  return (
    <img
      ref={ref}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={src}
      alt={alt}
      className={className}
    />
  );
}
