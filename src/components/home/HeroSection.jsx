import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Star } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const trustPoints = [
  'Verified supplier network across China',
  'On-site factory audits & QC inspections',
  'Dedicated sourcing manager per project',
  'Transparent pricing, no hidden fees',
];

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-brand-dark overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-main-4a7b2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/30 text-brand-blue-light text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Shield className="w-3.5 h-3.5" />
              Trusted by 200+ Global Buyers
            </div>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl"
            >
              We help overseas businesses find reliable Chinese suppliers, verify factories, control quality, and coordinate shipping — so you can source with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-700 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-7 py-3.5 rounded-lg transition-colors text-base"
              >
                How It Works
              </Link>
            </div>

            <ul className="flex flex-col gap-2.5">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero image */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                alt="China factory sourcing and quality control"
                data-strk-img-id="hero-factory-img-9c3d1e"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-80 object-cover"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Client Satisfaction</p>
                  <p className="text-sm font-bold text-brand-dark">98% Positive Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '200+', label: 'Global Buyers Served' },
              { value: '1,500+', label: 'Sourcing Projects' },
              { value: '98%', label: 'On-Time Delivery' },
              { value: '10+ yrs', label: 'Industry Experience' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
