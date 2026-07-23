import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BackgroundImage({
  id,
  query,
  ratio = '16x9',
  width = 1600,
  className = '',
  children,
}) {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [query]);

  return (
    <div
      ref={ref}
      data-strk-bg-id={id}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={width}
      className={`bg-stone-200 ${className}`}
    >
      {children}
    </div>
  );
}