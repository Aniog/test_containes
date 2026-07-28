import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Truck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          data-strk-bg-id="hero-bg-8f2a9c"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-navy-950/75" />
      </div>

      <div className="relative section-container section-padding pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-600/20 border border-brand-500/30 rounded-full text-brand-200 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Trusted by 500+ Global Buyers
          </div>

          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            China Sourcing Agent for Global Buyers
          </h1>

          <p id="hero-subtitle" className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
            Find reliable Chinese suppliers, verify factories, ensure quality, and ship with confidence. We handle the entire sourcing process so you can focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
            <Link to="/contact" className="btn-primary text-base px-8 py-3.5 gap-2">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/how-it-works" className="btn-white text-base px-8 py-3.5">
              How It Works
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
            {[
              { icon: CheckCircle, label: 'Verified Suppliers' },
              { icon: Shield, label: 'Quality Guaranteed' },
              { icon: Truck, label: 'End-to-End Shipping' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-brand-400 shrink-0" />
                <span className="text-sm font-medium text-slate-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
