import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustPoints = [
  'Verified supplier network across China',
  'On-site factory audits & QC inspections',
  'End-to-end shipping coordination',
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
    <section ref={containerRef} className="relative bg-[#0d2340] overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2340] via-[#0d2340]/90 to-[#0d2340]/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1a4f8a]/40 border border-[#1a4f8a]/50 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-[#e8621a]" />
              <span className="text-blue-200 text-sm font-medium">Trusted by 200+ Global Buyers</span>
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for{' '}
              <span className="text-[#e8621a]">Global Buyers</span>
            </h1>

            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-lg">
              We help importers worldwide find reliable Chinese suppliers, verify factories, inspect quality, and coordinate shipping — reducing risk at every step.
            </p>

            <ul className="space-y-3 mb-10">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-blue-100">
                  <CheckCircle className="w-5 h-5 text-[#e8621a] flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-base transition-colors"
              >
                How It Works
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-blue-300 text-xs">Global Clients</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-blue-300 text-xs">Years Experience</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-blue-300 text-xs">Product Categories</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-blue-300 text-xs">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-factory-img-d4e5f6"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0d2340] text-sm">Factory Verified</div>
                    <div className="text-gray-500 text-xs">ISO 9001 certified · 3rd-party audit passed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
