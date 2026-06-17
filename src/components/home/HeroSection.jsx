import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';

const highlights = [
  'Verified Chinese suppliers',
  'On-site factory audits',
  'Pre-shipment quality inspection',
  'End-to-end shipping support',
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-blue overflow-hidden">
      {/* Background overlay image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-red-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-red rounded-full"></span>
              China-Based Sourcing Agent
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-blue-200 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              We help importers worldwide find reliable Chinese suppliers, verify factories, inspect product quality, and coordinate shipping — so you can buy with confidence.
            </p>
            <ul className="flex flex-col gap-2 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center text-base py-4 px-8">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="flex items-center justify-center gap-2 text-white border-2 border-white/40 hover:border-white px-8 py-4 rounded-lg font-semibold transition-colors text-base">
                How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Hero image */}
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
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue/90 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[['500+', 'Verified Suppliers'], ['98%', 'Client Satisfaction'], ['15+', 'Industries Served']].map(([num, label]) => (
                    <div key={label}>
                      <div className="text-brand-gold font-bold text-xl">{num}</div>
                      <div className="text-blue-200 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile stats bar */}
      <div className="lg:hidden bg-brand-dark/80 border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-3 gap-4 text-center">
          {[['500+', 'Suppliers'], ['98%', 'Satisfaction'], ['15+', 'Industries']].map(([num, label]) => (
            <div key={label}>
              <div className="text-brand-gold font-bold text-lg">{num}</div>
              <div className="text-blue-300 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
