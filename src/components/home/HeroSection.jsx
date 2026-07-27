import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustPoints = [
  'Verified Chinese suppliers only',
  'On-site factory audits',
  'Third-party quality inspection',
  'End-to-end shipping support',
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
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-brand-orange" />
            <span className="text-brand-orange text-sm font-medium">China-Based Sourcing Experts</span>
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            China Sourcing Agent<br />
            <span className="text-brand-orange">for Global Buyers</span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help importers and brands find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-700 text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg text-base transition-colors"
            >
              How It Works
            </Link>
          </div>

          <ul className="flex flex-col sm:flex-row flex-wrap gap-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-brand-orange shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Verified Suppliers' },
              { value: '12+', label: 'Years in China' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '40+', label: 'Countries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
