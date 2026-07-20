import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { cn } from '@/lib/utils';

// Background image div with the strk-bg tags. Used for hero and story sections.
// Calls ImageHelper.loadImages on its own root so the runtime populates the
// background regardless of who mounts us.
function StrkBg({
  bgId,
  query,
  ratio = '16x9',
  width = 1600,
  className = '',
  containerRef: externalRef,
  register,
  children,
}) {
  const internalRef = useRef(null);
  const containerRef = externalRef || internalRef;
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    if (register) register(containerRef);
  }, [register, containerRef]);

  // Populate the background image via the stock image system. Scoped to this
  // element so we don't double-scan parent containers.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, el);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [bgId, query]);

  // Best-effort detection of when the runtime injects a background-image.
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const interval = setInterval(() => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && !bg.includes('data:image/svg+xml')) {
        setLoaded(true);
        clearInterval(interval);
      }
    }, 250);
    // Stop checking after 12 seconds
    const timeout = setTimeout(() => clearInterval(interval), 12000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-strk-bg-id={bgId}
      data-strk-bg={query}
      data-strk-bg-ratio={ratio}
      data-strk-bg-width={String(width)}
      className={cn(
        'relative w-full bg-linen bg-cover bg-center',
        className
      )}
    >
      {!loaded && !errored && (
        <div className="absolute inset-0 shimmer" aria-hidden="true" />
      )}
      {errored && (
        <div className="absolute inset-0 bg-gradient-to-br from-espresso to-mink" aria-hidden="true" />
      )}
      {children}
    </div>
  );
}

export default StrkBg;
