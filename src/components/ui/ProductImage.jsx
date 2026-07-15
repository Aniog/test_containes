import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function ProductImage({
  image,
  alt,
  className = '',
  containerClassName = '',
  asBackground = false,
  bgId,
  children,
}) {
  const containerRef = useRef(null);
  const textId = image?.id ? `${image.id}-query` : undefined;

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [image?.id]);

  if (asBackground) {
    return (
      <div ref={containerRef} className={`relative ${containerClassName}`}>
        <span id={textId} className="sr-only" aria-hidden="true">
          {image?.query || alt || ''}
        </span>
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id={bgId}
          data-strk-bg={`[${textId}]`}
          data-strk-bg-ratio={image?.ratio || '4x3'}
          data-strk-bg-width={image?.width || 800}
        />
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={containerClassName}>
      <span id={textId} className="sr-only" aria-hidden="true">
        {image?.query || alt || ''}
      </span>
      <img
        data-strk-img-id={image?.id}
        data-strk-img={`[${textId}]`}
        data-strk-img-ratio={image?.ratio || '4x3'}
        data-strk-img-width={image?.width || 600}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt || image?.alt || ''}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    </div>
  );
}
