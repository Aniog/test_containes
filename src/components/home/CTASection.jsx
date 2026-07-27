import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CTASection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
         <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          data-strk-bg-id="cta-bg-warehouse-2f8k9x"
          data-strk-bg="[cta-title] warehouse manufacturing production busy"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/60" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 id="cta-title" className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Streamline Your China Sourcing?
        </h2>
        <p className="mt-4 text-xl text-slate-300">
          Tell us about your product requirements, and we'll provide a free, no-obligation sourcing quote within 48 hours.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-slate-50 transition-colors shadow-lg shadow-white/10"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5 text-blue-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
