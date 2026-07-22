import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

// Compile-time-resolved warm editorial fallback (gold jewelry still life).
// The strk-img build plugin replaces this src with a real stock image; at
// runtime, ImageHelper re-resolves every data-strk-img-id to its own photo.
// Using a resolved stock URL (instead of an empty SVG placeholder) keeps
// production builds free of unresolved placeholder images.
const FALLBACK_SRC =
  'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1611591437281-460bfbe1220a';

/**
 * Stock-image <img>. `query` should reference on-page text ids like
 * `[product-name-abc] [section-title]`. Falls back gracefully to a warm
 * gradient if the stock service has no result.
 */
export function StrkImage({
  imgId,
  query,
  ratio = '1x1',
  width = 800,
  alt = '',
  className = '',
  imgClassName = '',
  eager = false,
}) {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, [query]);

  return (
    <span ref={ref} className={`block overflow-hidden ${className}`}>
      <img
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src={FALLBACK_SRC}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </span>
  );
}

/**
 * Stock-image background container.
 */
export function StrkBackground({
  bgId,
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
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={`bg-cover bg-center ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Product image with a stable hidden caption carrying the product name,
 * so stock queries always resolve to relevant gold-jewelry imagery.
 * `angle` ('main' | 'alt' | number) shifts composition for gallery/hover shots.
 */
export function ProductImage({ product, angle = 'main', ratio = '4x5', width = 800, className = '', imgClassName = '' }) {
  const captionId = `pimg-caption-${product.id}-${angle}`;
  return (
    <span className={`relative block ${className}`}>
      <span id={captionId} className="sr-only">
        {product.tagline}, {product.name}, 18k gold demi-fine jewelry, warm editorial photography
        {angle !== 'main' ? ', close-up detail worn on model' : ''}
      </span>
      <StrkImage
        imgId={`pimg-${product.id}-${angle}`}
        query={`[${captionId}]`}
        ratio={ratio}
        width={width}
        alt={product.name}
        className="h-full w-full"
        imgClassName={imgClassName}
      />
    </span>
  );
}
