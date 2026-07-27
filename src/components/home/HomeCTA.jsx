import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HomeCTA = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-primary"
        data-strk-bg-id="cta-bg-ssourcing"
        data-strk-bg="[cta-title] China shipping port night containers logistics"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 id="cta-title" className="text-3xl md:text-5xl font-extrabold text-white mb-8 italic">Start Sourcing Smarter in China</h2>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join 500+ global brands who trust SSourcing China for their end-to-end procurement and quality management.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/contact" className="btn-accent text-lg px-12 py-4 shadow-xl hover:scale-105 transition-transform">
            Get a Free Quote
          </Link>
          <a href="mailto:info@ssourcingchina.com" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-md font-semibold text-lg flex items-center justify-center transition-all">
            Email Us Directly <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
        <p className="mt-12 text-slate-400 text-sm italic">
          No commitment required. Initial consultations are always free.
        </p>
      </div>
    </section>
  );
};

export default HomeCTA;
