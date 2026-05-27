import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const HomeCallToAction = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-cosmos-surface">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-3xl overflow-hidden border border-cosmos-border p-12 md:p-20">
          <div
            className="absolute inset-0 opacity-20"
            data-strk-bg-id="cta-bg-mc014"
            data-strk-bg="[cta-desc] [cta-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cosmos-surface/90 to-cosmos-bg/90" />
          <div className="relative z-10">
            <p className="text-xs font-heading font-medium uppercase tracking-widest text-cosmos-primary mb-4">
              Start Exploring
            </p>
            <h2
              id="cta-title"
              className="font-heading font-bold text-3xl md:text-5xl text-slate-50 mb-6"
            >
              Dive Into the Microscopic World
            </h2>
            <p
              id="cta-desc"
              className="font-body text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Browse our full gallery of microscopic organisms, from the alien beauty
              of diatoms to the resilience of tardigrades. Every image reveals a
              universe you never knew existed.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center justify-center gap-2 bg-cosmos-primary text-cosmos-bg font-heading font-semibold px-10 py-4 rounded-full hover:bg-cyan-400 transition-colors duration-200 text-base"
            >
              Explore the Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCallToAction;
