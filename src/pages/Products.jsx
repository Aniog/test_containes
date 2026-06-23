import React, { useRef, useEffect } from 'react';
import PageHeader from '../components/shared/PageHeader';
import HomeProducts from '../components/home/HomeProducts';
import { ImageHelper } from '@strikingly/sdk';

const mockStrkImgConfig = {};

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && typeof window.ImageHelper.loadImages === 'function') {
        try {
            window.ImageHelper.loadImages(mockStrkImgConfig, containerRef.current);
        } catch (e) {
            console.log("Image load deferred");
        }
    }
  }, []);

  return (
    <div ref={containerRef}>
      <PageHeader 
        title="Products We Source" 
        description="We source across all major product categories, connecting you directly with specialized manufacturing hubs in China."
        bgImageId="bg-products-header"
        bgImageUrl="https://images.unsplash.com/photo-1542475477-96aee063fc73?auto=format&fit=crop&q=80&w=2070"
      />
      
      <HomeProducts />
      
      <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-6">Don't see your category?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                  Our network extends to thousands of verified factories across China. If you need something specific, especially custom OEM/ODM products, we can find the right manufacturer for you.
              </p>
              <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-base font-bold text-primary transition-colors hover:bg-slate-100 flex-shrink-0 shadow-lg">
                  Submit a Sourcing Request
              </a>
          </div>
      </section>
    </div>
  );
}
