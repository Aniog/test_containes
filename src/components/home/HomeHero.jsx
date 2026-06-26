import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Factory, Truck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const heroImgId = 'hero-factory-floor-a8f2c1';
const heroBgId = 'hero-bg-shipping-6d34fa';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id={heroBgId}
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-gold-light text-sm font-medium">Trusted by 500+ Global Buyers</span>
            </div>
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              China Sourcing Agent <br className="hidden sm:block" />
              <span className="text-gold">for Global Buyers</span>
            </h1>
            <p id="hero-subtitle" className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
              We help international buyers source from China with confidence. From supplier verification and factory audits to quality inspection and shipping — we handle the entire process so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold px-8 py-4 rounded-lg hover:bg-gold-light transition-colors text-base"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { icon: Factory, label: '2,000+ Audited Factories' },
                { icon: CheckCircle, label: '98% On-Time Delivery' },
                { icon: Truck, label: '50+ Countries Shipped' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon className="w-5 h-5 text-gold mx-auto mb-1.5" />
                  <span className="text-xs text-gray-400 block">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-gold-light/20 rounded-2xl blur-xl" />
              <img
                alt="Chinese factory quality control inspection"
                className="relative rounded-xl shadow-2xl border border-white/10 w-full"
                data-strk-img-id={heroImgId}
                data-strk-img="factory quality control inspection professional manufacturing china"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
