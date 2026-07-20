import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

// Renders an <img> with the strk-img tags. Uses a stable containerRef to call
// ImageHelper.loadImages once per instance — a single image doesn't need a
// container wrapper, we can target the <img> itself via a wrapper.
function ProductImage({
  imgId,
  query,
  ratio = '4x5',
  width = 800,
  alt = '',
  className = '',
  imgClassName = '',
  eager = false,
  ratioClass = 'aspect-[4/5]',
}) {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    // We give the helper a wrapping container so the img is inside the scanned subtree.
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, [imgId, query]);

  // The helper may inject the real <img> as a sibling. We want a smooth swap,
  // so we keep a placeholder until either we detect the helper has populated
  // the img, or we error out (fallback to a quiet warm-tone block).

  return (
    <div
      ref={containerRef}
      className={cn('relative w-full overflow-hidden bg-linen', ratioClass, className)}
    >
      {!loaded && !errored && (
        <div className="absolute inset-0 shimmer" aria-hidden="true" />
      )}
      <img
        alt={alt}
        className={cn(
          'relative h-full w-full object-cover transition-opacity duration-700 ease-out',
          loaded ? 'opacity-100' : 'opacity-0',
          imgClassName
        )}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
      {errored && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-linen to-sand text-mink"
          aria-hidden="true"
        >
          <span className="font-serif text-2xl italic text-mink/70">{alt}</span>
        </div>
      )}
    </div>
  );
}

export default ProductImage;
