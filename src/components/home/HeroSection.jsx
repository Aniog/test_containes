import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';

const trustBadges = [
  'Verified Suppliers Only',
  'On-site Factory Audits',
  'Third-party QC Reports',
  'Real-time Production Updates',
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-dark overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-ssourcing-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ opacity: 0.25 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60 z-10" />

      <div className="section-container relative z-20 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-navy/30 border border-brand-navy/50 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span>China-Based Sourcing Professionals</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            China Sourcing Agent<br />
            <span className="text-brand-orange">for Global Buyers</span>
          </h1>

          {/* Subheadline */}
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl"
          >
            We help importers worldwide find reliable Chinese suppliers, verify factories,
            inspect product quality, follow production, and coordinate shipping — all from
            one trusted partner on the ground in China.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary text-base px-8 py-4 flex items-center gap-2 justify-center">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/how-it-works" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors text-base text-center">
              See How It Works
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>Trusted by 200+ buyers across 30+ countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
