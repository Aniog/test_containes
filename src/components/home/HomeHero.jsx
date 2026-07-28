import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Search } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustPoints = [
  'Verified supplier network across China',
  'On-site factory audits & QC inspections',
  'End-to-end production follow-up',
  'Transparent reporting & communication',
];

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-dark overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Shield className="w-3.5 h-3.5" />
              China-Based Sourcing Agent
            </div>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              China Sourcing Agent for{' '}
              <span className="text-brand-red">Global Buyers</span>
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl"
            >
              We help importers and brands find reliable Chinese suppliers, verify factories, inspect product quality, and coordinate shipping — reducing risk and saving time at every step.
            </p>

            <ul className="space-y-3 mb-10">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-gray-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-brand-green flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-factory-img-9b4c1d"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing"
                className="w-full h-80 object-cover"
              />
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/90 to-transparent p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { value: '500+', label: 'Verified Suppliers' },
                    { value: '12+', label: 'Years Experience' },
                    { value: '40+', label: 'Countries Served' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
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
