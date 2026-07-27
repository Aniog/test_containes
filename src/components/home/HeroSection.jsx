import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Search, Package, Ship } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const badges = [
    { icon: Search, label: 'Supplier Sourcing' },
    { icon: Shield, label: 'Factory Verification' },
    { icon: Package, label: 'Quality Inspection' },
    { icon: Ship, label: 'Shipping Coordination' },
  ];

  return (
    <section ref={containerRef} className="relative bg-navy overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-8a3c9d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand/20 border border-brand/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              <span className="text-brand text-xs font-semibold uppercase tracking-wide">
                Trusted by 200+ Global Buyers
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-tight mb-6"
            >
              China Sourcing Agent for{' '}
              <span className="text-brand">Global Buyers</span>
            </h1>

            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              We help overseas businesses find reliable suppliers, verify
              factories, inspect product quality, follow production, and
              coordinate shipping from China.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                How It Works
              </Link>
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {badges.map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <b.icon className="w-4 h-4 text-brand shrink-0" />
                  <span className="text-slate-300 text-xs font-medium">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                data-strk-img-id="hero-factory-img-9d2e1a"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100">
              <div className="text-2xl font-bold text-navy">200+</div>
              <div className="text-sm text-muted-blue">Buyers Served</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-brand text-white rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
