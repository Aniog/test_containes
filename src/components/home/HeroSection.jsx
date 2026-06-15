import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Shield, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { AccentButton, OutlineButton } from '../shared/Buttons';

const trustPoints = [
  'Verified supplier network across China',
  'On-site factory audits & QC inspections',
  'Transparent pricing — no hidden fees',
  'Dedicated sourcing manager per project',
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-primary-dark overflow-hidden">
      {/* Background image overlay */}
      <span id="hero-bg-context" className="sr-only">China factory warehouse industrial manufacturing aerial view</span>
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-bg-context]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Trusted by buyers in 30+ countries</span>
            </div>
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl">
              We help importers find reliable Chinese suppliers, verify factories, inspect product quality, and coordinate shipping — so you can source with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <AccentButton to="/contact" size="lg">
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </AccentButton>
              <OutlineButton to="/how-it-works" size="lg" className="border-white text-white hover:bg-white hover:text-primary-dark">
                How It Works
              </OutlineButton>
            </div>

            <ul className="space-y-2">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-blue-100 text-sm">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Hero image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <span id="hero-img-context" className="sr-only">China manufacturing factory production line quality control inspection workers</span>
              <img
                data-strk-img-id="hero-main-img-d4e5f6"
                data-strk-img="[hero-img-context]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing and quality inspection"
                className="w-full h-80 object-cover"
              />
              {/* Floating stat card */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary-dark font-bold text-lg leading-tight">500+</p>
                    <p className="text-gray-500 text-xs">Verified Suppliers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '10+', label: 'Years in China Sourcing' },
              { value: '500+', label: 'Verified Suppliers' },
              { value: '30+', label: 'Countries Served' },
              { value: '98%', label: 'Client Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-gold">{stat.value}</p>
                <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
