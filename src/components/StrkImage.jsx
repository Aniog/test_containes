import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

/**
 * Wrapper that triggers the stock-image loader whenever the tagged
 * data-strk-img / data-strk-bg elements inside it change.
 */
export function ImageScope({ children, className = '', deps = [] }) {
  const ref = useRef(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Transient 1x1 transparent placeholder that ImageHelper.loadImages replaces
// with the resolved stock image URL at runtime. It exists only to keep layout
// stable before the loader runs and is never a final rendered asset.
export const IMG_PLACEHOLDER =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export function StrkImg({ imgId, query, ratio = '4x3', width = 800, alt = '', className = '' }) {
  return (
    <img
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={String(width)}
      src={IMG_PLACEHOLDER}
      loading="lazy"
    />
  );
}
