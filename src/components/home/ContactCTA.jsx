import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowUpRight } from 'lucide-react';

const ContactCTA = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-steel-900 text-paper py-24 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30"
        data-strk-bg-id="cta-bg-3c8a21"
        data-strk-bg="[cta-title] [cta-eyebrow] industrial press brake metal factory floor"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-steel-900/85" />

      <div className="container-artitect relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <span
              id="cta-eyebrow"
              className="label-eyebrow text-accent-500 brass-bar"
            >
              Ready when you are
            </span>
            <h2
              id="cta-title"
              className="mt-6 font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-paper leading-tight tracking-tight"
            >
              Get a quote on the
              <br className="hidden md:block" />
              <span className="text-accent-500">right machine, right now.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-steel-200 max-w-2xl leading-relaxed">
              Share a few details about your operation and an ARTITECT engineer
              will respond within one business day with a configuration and a
              transparent price.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link to="/contact" className="btn-accent">
              Request a quote
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link to="/products" className="btn-outline-light">
              Browse the catalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
