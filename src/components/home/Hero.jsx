import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-steel-900 text-paper overflow-hidden"
    >
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-8f3a91"
        data-strk-bg="[hero-eyebrow] [hero-title] [hero-subtitle] industrial sheet metal folding factory machinery"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-steel-900 via-steel-900/85 to-steel-900/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-steel-900/60" />

      <div className="container-artitect relative z-10 pt-20 md:pt-28 lg:pt-32 pb-24 md:pb-36 lg:pb-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-9 max-w-4xl">
            <span
              id="hero-eyebrow"
              className="label-eyebrow text-accent-500 brass-bar"
            >
              Engineered Precision · Built to Fold
            </span>
            <h1
              id="hero-title"
              className="mt-6 font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-paper"
            >
              Metal that folds
              <br />
              <span className="text-accent-500">to your standard.</span>
            </h1>
            <p
              id="hero-subtitle"
              className="mt-8 text-lg md:text-xl lg:text-2xl text-steel-200 max-w-2xl leading-relaxed"
            >
              ARTITECT MACHINERY designs and builds double folding machines,
              sheet metal folders, and metal folding machines for fabricators
              who refuse to compromise on angle accuracy.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="btn-accent">
                Explore the lineup
                <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
              <Link to="/contact" className="btn-outline-light">
                Request a quote
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 hidden lg:block">
            <div className="border-l border-steel-700 pl-6">
              <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-300">
                Model shown
              </div>
              <div className="mt-2 font-display font-bold text-2xl text-paper">
                DF-3200
              </div>
              <div className="mt-1 text-sm text-steel-300">
                Double Folding Machine
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-300">
                    Length
                  </div>
                  <div className="mt-1 font-display font-semibold">3200 mm</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-wider2 uppercase text-steel-300">
                    Capacity
                  </div>
                  <div className="mt-1 font-display font-semibold">2.5 mm</div>
                </div>
              </div>
              <Link
                to="/products/artitect-df-3200"
                className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider2 font-semibold text-accent-500 hover:text-accent-100"
              >
                Full specs
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-10">
        <div className="container-artitect">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-[10px] md:text-xs font-mono uppercase tracking-wider2 text-steel-300">
            <span>ISO 9001 : 2015</span>
            <span className="hidden sm:inline">·</span>
            <span>CE</span>
            <span className="hidden sm:inline">·</span>
            <span>4 200+ machines installed</span>
            <span className="hidden sm:inline">·</span>
            <span>32 countries</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
