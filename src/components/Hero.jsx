import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Award, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        data-strk-bg-id="hero-bg-1a2b3c"
        data-strk-bg="industrial sheet metal factory precision machinery manufacturing"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(215 40% 100% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(215 40% 100% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/80 text-xs font-medium tracking-widest uppercase mb-8">
            <Zap className="w-3.5 h-3.5 text-accent-400" />
            Precision Sheet Metal Engineering
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
            Master the Art of
            <br />
            <span className="text-accent-400">Metal Folding</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-200/80 leading-relaxed max-w-xl mb-10">
            Industry-leading double folding machines engineered for precision, durability, and effortless operation. Built for workshops that demand perfection in every bend.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              onClick={(e) => scrollTo(e, '#products')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40"
            >
              Explore Products
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              onClick={(e) => scrollTo(e, '#about')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/10 transition-all duration-300"
            >
              About Us
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Shield, label: 'ISO Certified Quality' },
              { icon: Award, label: '20+ Years Experience' },
              { icon: Zap, label: 'Global Shipping' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent-400" />
                </div>
                <span className="text-sm font-medium text-brand-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
