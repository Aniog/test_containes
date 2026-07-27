import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Truck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700" ref={containerRef}>
      <div className="absolute inset-0 opacity-20">
        <div
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="Chinese factory production line quality control inspection"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="w-full h-full"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white mb-6">
            <Shield className="w-4 h-4 text-accent-500" />
            <span>Trusted by 200+ importers across 30 countries</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
            We help overseas businesses find verified suppliers, ensure product quality, 
            and manage production and shipping — so you can import from China with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact" className="btn-accent text-lg px-8 py-3.5 gap-2">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/how-it-works" className="btn-outline border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3.5">
              How It Works
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: CheckCircle, text: 'Verified factories only' },
              { icon: Shield, text: 'Rigorous quality control' },
              { icon: Truck, text: 'End-to-end logistics' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-accent-500 flex-shrink-0" />
                <span className="text-sm text-slate-300 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
