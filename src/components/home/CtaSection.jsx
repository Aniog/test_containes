import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="cta-bg-n5o6p7"
        data-strk-bg="[cta-title] [cta-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p id="cta-subtitle" className="text-xs tracking-widest uppercase text-neutral-400 mb-6">
          The full collection
        </p>
        <h2 id="cta-title" className="font-thin tracking-widest uppercase text-white text-4xl md:text-6xl lg:text-7xl leading-none mb-10">
          Enter the<br />Gallery
        </h2>
        <p className="font-light text-neutral-400 text-base lg:text-lg max-w-lg mx-auto mb-12 leading-relaxed">
          Over two thousand images spanning the microscopic world — from bacteria to butterfly wings, from salt crystals to spider silk.
        </p>
        <Link
          to="/gallery"
          className="inline-block border border-white text-white px-12 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
        >
          View All Images
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
