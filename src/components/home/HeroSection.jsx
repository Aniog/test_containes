import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-surface overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="hero-bg-main-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      <div className="container-custom relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Globe className="w-4 h-4" />
              <span>Serving Buyers in 40+ Countries</span>
            </div>
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-text-primary leading-tight mb-6"
            >
              China Sourcing Agent for{' '}
              <span className="text-primary">Global Buyers</span>
            </h1>
            <p
              id="hero-subtitle"
              className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-xl"
            >
              We help overseas businesses find reliable Chinese suppliers, verify factories, inspect quality, follow production, and coordinate shipping — end to end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-md transition-all hover:scale-[1.02] shadow-lg shadow-secondary/20"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-md transition-all"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Verified Suppliers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Transparent Pricing</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
              <img
                data-strk-img-id="hero-img-main-d4e5f6"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="China factory sourcing and quality inspection"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-6 bg-white rounded-lg shadow-lg p-4 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-text-primary font-semibold text-sm">500+</p>
                  <p className="text-text-muted text-xs">Factories Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
