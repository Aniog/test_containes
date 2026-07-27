import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Shield, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustBadges = [
  { icon: Globe, text: '30+ Countries Served' },
  { icon: Shield, text: 'Verified Factory Network' },
  { icon: Star, text: '500+ Sourcing Projects' },
  { icon: CheckCircle, text: 'End-to-End Support' },
];

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-dark overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-factory-9a2b3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60" />

      <div className="relative container-xl py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-700/50 rounded-full px-4 py-1.5 mb-6">
            <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">China-Based Sourcing Agency</span>
          </div>

          {/* Headline */}
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            China Sourcing Agent<br />
            <span className="text-blue-400">for Global Buyers</span>
          </h1>

          <p
            id="hero-subtitle"
            className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl"
          >
            We help importers and brands find reliable Chinese suppliers, verify factories,
            inspect product quality, and coordinate shipping — so you can source with confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/contact#quote"
              className="btn-primary text-base py-3.5 px-8 flex items-center justify-center gap-2"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="border-2 border-slate-500 text-white hover:border-white font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              See How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-slate-300">
                <Icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
