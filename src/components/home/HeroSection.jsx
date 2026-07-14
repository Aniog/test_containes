import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustPoints = [
  'Verified supplier network across China',
  'On-site factory audits & QC inspections',
  'Dedicated sourcing manager per project',
  'Transparent pricing, no hidden fees',
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-navy overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-9f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-brand-red rounded-full"></span>
              China-Based Sourcing Agent
            </div>
            <h1 id="hero-title" className="text-white text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4">
              China Sourcing Agent<br />
              <span className="text-brand-sky">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl">
              We help importers and brands find reliable Chinese suppliers, verify factories, manage quality inspections, and coordinate shipping — all from one trusted partner on the ground.
            </p>

            <ul className="space-y-2 mb-8">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-sky flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-red-700 transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors text-base"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="China factory sourcing"
                data-strk-img-id="hero-factory-img-7b4d1e"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-neutral-900 font-semibold text-sm">Verified Suppliers</div>
                  <div className="text-neutral-500 text-xs">500+ audited factories</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { value: '500+', label: 'Verified Suppliers' },
            { value: '12+', label: 'Years in China' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '40+', label: 'Countries Served' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white text-3xl font-bold">{stat.value}</div>
              <div className="text-blue-200 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
