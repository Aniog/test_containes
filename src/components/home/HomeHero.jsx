import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';

const trustPoints = [
  'Verified supplier network across China',
  'On-site factory audits & QC inspections',
  'Dedicated sourcing manager per project',
  'Transparent pricing, no hidden fees',
];

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-primary-dark overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-ssourcing-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
              China-Based Sourcing Agent
            </span>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg text-blue-100 mb-8 leading-relaxed">
              We help importers, brands, and distributors worldwide find reliable Chinese suppliers,
              verify factories, inspect quality, and coordinate shipping — all from one trusted partner.
            </p>
            <ul className="space-y-3 mb-10">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-blue-100">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#a93226] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-factory-img-d4e5f6"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing"
                className="w-full h-80 object-cover"
              />
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/90 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: '500+', label: 'Verified Suppliers' },
                    { value: '12+', label: 'Years Experience' },
                    { value: '40+', label: 'Countries Served' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-blue-200">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
