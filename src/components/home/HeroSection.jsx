import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';

const highlights = [
  'Verified supplier network across China',
  'On-site factory audits & quality inspection',
  'End-to-end production follow-up',
  'Transparent pricing, no hidden fees',
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-dark overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-ssourcing-7f3a1b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-navy/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <span className="inline-block bg-brand-blue/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-500/30">
            China-Based Sourcing Agent
          </span>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            China Sourcing Agent<br />
            <span className="text-brand-blue">for Global Buyers</span>
          </h1>
          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-300 mt-6 max-w-2xl leading-relaxed"
          >
            We help overseas buyers find reliable Chinese suppliers, verify factories,
            inspect product quality, follow production, and coordinate shipping — all from one trusted partner.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors shadow-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-500 hover:border-white text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
