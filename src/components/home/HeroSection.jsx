import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle, ArrowRight } from 'lucide-react';

const trustPoints = [
  'Verified supplier network across 20+ industries',
  'On-site factory audits and quality inspections',
  'English-speaking team based in China',
  'End-to-end support from sourcing to delivery',
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        data-strk-bg-id="hero-bg-ss001"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
            China-Based Sourcing Agent
          </span>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed">
            We help importers, brands, and distributors find reliable Chinese suppliers, verify factories, control quality, and coordinate shipping — all from one trusted partner.
          </p>

          <div className="space-y-2 mb-8">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#D4A017] flex-shrink-0" />
                <span className="text-white/90 text-sm">{point}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#A93226] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
