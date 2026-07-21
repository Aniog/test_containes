import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

/**
 * Wrap any subtree that contains data-strk-img / data-strk-bg tags.
 * Re-runs ImageHelper.loadImages when `deps` change.
 */
export default function ImageContainer({ children, className, deps = [] }) {
  const ref = useRef(null);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    });
    return () => window.cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
