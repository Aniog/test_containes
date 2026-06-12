import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustPoints = [
  'No upfront fees until you approve samples',
  'Factory audits with photo & video reports',
  'Real-time production updates',
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-navy overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <Star className="w-3 h-3" />
              Trusted by buyers in 30+ countries
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-brand-gold">Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-xl">
              We help overseas businesses find verified Chinese suppliers, inspect product quality,
              follow production, and coordinate shipping — so you can import with confidence.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white font-bold px-8 py-4 rounded-lg text-base hover:opacity-90 transition-opacity"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-base hover:border-white hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>

          {/* Right: Image card */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-factory-img-9b4d1e"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing"
                className="w-full h-80 object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="text-neutral-900 font-semibold text-sm">Verified Suppliers</p>
                  <p className="text-neutral-600 text-xs">Factory audits included</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-10">
          {[
            { value: '500+', label: 'Verified Suppliers' },
            { value: '30+', label: 'Countries Served' },
            { value: '8 Years', label: 'Industry Experience' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand-gold">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
