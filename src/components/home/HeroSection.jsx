import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustPoints = [
  'No upfront fees — pay only when you proceed',
  'Verified supplier network across 20+ industries',
  'On-site factory audits and QC inspections',
  'English-speaking team, China-based operations',
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#0d2340] overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-7f3a2b"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2340] via-[#0d2340]/90 to-[#0d2340]/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1a4f8a]/30 border border-[#1a4f8a]/50 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 bg-[#e8621a] rounded-full" />
              <span className="text-[#a8d4ff] text-sm font-medium">China-Based Sourcing Agent</span>
            </div>

            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              China Sourcing Agent<br />
              <span className="text-[#e8621a]">for Global Buyers</span>
            </h1>

            <p id="hero-subtitle" className="text-lg text-[#a8b8cc] leading-relaxed mb-8 max-w-xl">
              We help importers and brands find reliable Chinese suppliers, verify factories, inspect product quality, and coordinate shipping — so you can source with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:border-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                How It Works
              </Link>
            </div>

            <ul className="space-y-2.5">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-[#a8b8cc] text-sm">
                  <CheckCircle className="w-4 h-4 text-[#4ade80] shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Stats card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                {[
                  { value: '500+', label: 'Sourcing Projects Completed' },
                  { value: '20+', label: 'Product Categories' },
                  { value: '98%', label: 'Client Satisfaction Rate' },
                  { value: '8 yrs', label: 'China Sourcing Experience' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-white/10 rounded-xl">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-[#a8b8cc] leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 bg-[#1a4f8a]/40 rounded-xl p-4">
                <div className="flex -space-x-2">
                  {['bg-blue-400', 'bg-green-400', 'bg-orange-400', 'bg-purple-400'].map((color, i) => (
                    <div key={i} className={`w-8 h-8 ${color} rounded-full border-2 border-[#0d2340] flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{String.fromCharCode(65 + i)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-xs text-[#a8b8cc]">Trusted by buyers in 30+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
