import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Search, Package } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustBadges = [
  { icon: ShieldCheck, label: 'Verified Suppliers' },
  { icon: Search, label: 'Factory Audits' },
  { icon: Package, label: 'QC Inspections' },
];

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-navy overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-factory-9a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block bg-blue-600/20 text-blue-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-blue-500/30">
            China-Based Sourcing Agent
          </span>

          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            China Sourcing Agent<br />
            <span className="text-blue-400">for Global Buyers</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
          >
            We help importers worldwide find reliable Chinese suppliers, verify factories,
            inspect product quality, follow production, and coordinate shipping — so you
            can buy from China with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-base transition-colors shadow-lg"
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

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2"
              >
                <Icon className="w-4 h-4 text-blue-400" />
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
