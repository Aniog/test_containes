import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="section-padding">
      <div className="max-width-container px-4">
        <h1 id="products-title" className="section-title">Products</h1>
        <p className="section-subtitle">This page is under construction. Please check back soon.</p>
        <div 
          className="mt-12 rounded-3xl overflow-hidden aspect-video bg-slate-100"
          data-strk-img-id="products-placeholder"
          data-strk-img="[products-title] China business office factory"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1200"
        ></div>
      </div>
    </div>
  );
};

export default Products;
