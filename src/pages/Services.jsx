import React, { useRef, useEffect } from 'react';
import PageHeader from '../components/shared/PageHeader';
import HomeServices from '../components/home/HomeServices';
import { ImageHelper } from '@strikingly/sdk';

const mockStrkImgConfig = {};

export default function Services() {
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
        title="Our Sourcing Services" 
        description="Comprehensive solutions for international buyers looking to manufacture and source products from China safely."
        bgImageId="bg-services-header"
        bgImageUrl="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2070"
      />
      <HomeServices />
      
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Sourcing Plan?</h2>
            <p className="text-lg text-slate-600 mb-8">Every buyer's needs are unique. Contact us to discuss how we can tailor our services to your specific product and business model.</p>
            <a href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                Book a Free Consultation
            </a>
        </div>
      </section>
    </div>
  );
}
