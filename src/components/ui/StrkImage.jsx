import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

// For images NOT inside a ProductCard. Renders a single <img> with the strk-img
// tags. Used by the UGC reel and category tiles (which have many siblings).
function StrkImage({
  imgId,
  query,
  ratio = '4x5',
  width = 800,
  alt = '',
  className = '',
  imgClassName = '',
  ratioClass = 'aspect-[4/5]',
  containerRef: externalRef,
  register,
}) {
  const internalRef = useRef(null);
  const containerRef = externalRef || internalRef;
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    if (register) {
      register(containerRef);
    }
  }, [register, containerRef]);

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
        loading="lazy"
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
          <span className="font-serif text-xl italic text-mink/70">{alt}</span>
        </div>
      )}
    </div>
  );
}

export default StrkImage;
