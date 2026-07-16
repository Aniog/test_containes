import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useImageLoader = (containerRef) => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Check if ImageHelper is available on window (it might be injected by the striking platform)
    if (window.ImageHelper && typeof window.ImageHelper.loadImages === 'function') {
      const frameId = window.requestAnimationFrame(() => {
        window.ImageHelper.loadImages({}, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [pathname, search, containerRef]);
};