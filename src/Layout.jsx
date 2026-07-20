import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

const Layout = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    // Load images on route change
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      {children}
    </div>
  );
};

export default Layout;
