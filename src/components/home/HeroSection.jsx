import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustBadges = [
  'Verified Supplier Network',
  'On-site Factory Audits',
  'Third-party QC Inspections',
  'End-to-end Shipping Support',
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
        data-strk-bg-id="hero-bg-main-4a7b2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Star className="w-3 h-3" />
              <span>Trusted by 200+ Global Buyers</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-200 leading-relaxed mb-8 max-w-xl">
              We help importers, brands, and distributors find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — all from one trusted partner on the ground.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold px-7 py-4 rounded-lg transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-4 rounded-lg transition-colors text-base"
              >
                How It Works
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span className="text-blue-200 text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="China factory quality inspection"
                data-strk-img-id="hero-factory-img-9c3d1e"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 object-cover"
              />
              {/* Floating stat card */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-blue-light rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-text text-lg leading-none">98%</p>
                    <p className="text-brand-muted text-xs">Client Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { value: '200+', label: 'Global Buyers Served' },
            { value: '1,500+', label: 'Suppliers Verified' },
            { value: '10+', label: 'Years in China Sourcing' },
            { value: '30+', label: 'Product Categories' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-blue-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
