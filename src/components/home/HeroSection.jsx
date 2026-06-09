import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';
import CTAButton from '@/components/shared/CTAButton';

const trustBadges = [
  'Verified Suppliers Only',
  'On-site Factory Audits',
  'Third-party QC Inspections',
  'End-to-end Shipping Support',
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
        data-strk-bg-id="hero-bg-ssourcing-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 text-blue-200 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
            China-Based Sourcing Agent
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            China Sourcing Agent<br />
            <span className="text-brand-gold">for Global Buyers</span>
          </h1>

          <p id="hero-subtitle" className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help importers worldwide find reliable Chinese suppliers, verify factories,
            inspect product quality, follow production, and coordinate shipping — all from one trusted partner.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton to="/contact" variant="accent" className="text-base px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </CTAButton>
            <CTAButton to="/how-it-works" variant="white-outline" className="text-base px-8 py-4">
              See How It Works
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Verified Suppliers' },
              { value: '12+', label: 'Years Experience' },
              { value: '40+', label: 'Countries Served' },
              { value: '98%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-brand-gold">{stat.value}</div>
                <div className="text-sm text-slate-300 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
