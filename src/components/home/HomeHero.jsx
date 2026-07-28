import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  'Verified supplier network across China',
  'On-site factory audits & QC inspections',
  'End-to-end production follow-up',
];

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-blue-navy/80 z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p className="text-gold-accent font-semibold text-sm uppercase tracking-widest mb-4">
            China-Based Sourcing Agent
          </p>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
          >
            We help importers, brands, and distributors worldwide find reliable Chinese suppliers, verify factories, control quality, and coordinate shipping — so you can source with confidence.
          </p>

          <ul className="space-y-2 mb-10">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-gray-200 text-sm">
                <CheckCircle className="w-4 h-4 text-gold-accent flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-red-china hover:bg-[#a93226] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-navy font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
