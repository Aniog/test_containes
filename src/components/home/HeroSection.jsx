import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustPoints = [
  'Verified supplier network across 20+ industries',
  'On-site factory audits and quality inspections',
  'Dedicated sourcing manager for every project',
  'Transparent pricing — no hidden fees',
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
    <section ref={containerRef} className="relative overflow-hidden bg-brand-navy min-h-[600px] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-ssourcing-7f3a1c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />

      <div className="relative section-container py-20 md:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6">
            <Shield className="w-4 h-4 text-brand-orange" />
            <span className="text-brand-orange text-sm font-medium">Trusted by 300+ Global Buyers</span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5"
          >
            China Sourcing Agent<br />
            <span className="text-brand-orange">for Global Buyers</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            We help importers, brands, and distributors find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — so you can source with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/how-it-works" className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 inline-flex items-center gap-2 text-base">
              How It Works
            </Link>
          </div>

          <ul className="flex flex-col sm:flex-row flex-wrap gap-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="w-4 h-4 text-brand-orange flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
