import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const transparentPixel =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default function Image({
  id,
  query,
  ratio = '1x1',
  width = 600,
  alt,
  className,
  priority,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [query]);

  return (
    <img
      ref={ref}
      data-strk-img-id={id}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={transparentPixel}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      className={className}
    />
  );
}

export function BackgroundImage({
  id,
  query,
  ratio = '16x9',
  width = 1600,
  className,
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [query]);

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
