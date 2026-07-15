import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeNewsletter = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12">
      <div 
        className="max-w-5xl mx-auto bg-[#1A1A1A] text-white p-12 md:p-20 text-center relative overflow-hidden"
      >
        {/* Background texture or subtle image */}
        <div 
           data-strk-bg-id="newsletter-bg-2c3d1f"
           data-strk-bg="abstract gold metallic texture luxury background"
           data-strk-bg-ratio="16x9"
           data-strk-bg-width="1200"
           className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        />

        <div className="relative z-10 flex flex-col items-center gap-8">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gold font-bold">The Velmora Journal</p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight max-w-2xl">
            Elevate your jewelry box. Join for 10% off your first order.
          </h2>
          <p className="text-sm text-white/60 max-w-md">
            Be the first to hear about new launches, styling tips, and exclusive access to our private sales.
          </p>
          
          <form className="w-full max-w-md flex flex-col md:flex-row gap-4 mt-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-sm focus:border-gold outline-none transition-colors"
              required
            />
            <Button 
               type="submit"
               className="bg-gold text-white hover:bg-white hover:text-black border-transparent tracking-[0.2em] font-bold h-auto py-4 px-8"
            >
              JOIN NOW
            </Button>
          </form>
          <p className="text-[10px] text-white/30 uppercase tracking-widest mt-4">
            Unsubscribe at any time. View our Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeNewsletter;
