import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-slate-900 pt-20"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-7f3a2c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/70" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-amber-400 text-sm font-medium">Industry-Leading Precision</span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            >
              Precision Sheet Metal
              <span className="text-amber-500 block">Folding Machines</span>
            </h1>

            <p
              id="hero-subtitle"
              className="text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Engineered for excellence. ARTITECT MACHINERY delivers industrial-grade
              double folding machines that combine unmatched accuracy with effortless operation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-slate-900 font-semibold rounded-lg px-7 py-3.5 hover:bg-amber-400 transition-colors duration-200"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-amber-500 text-amber-500 font-semibold rounded-lg px-7 py-3.5 hover:bg-amber-500 hover:text-slate-900 transition-all duration-200"
              >
                Request a Quote
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-500" />
                <span className="text-slate-400 text-sm">5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span className="text-slate-400 text-sm">CE Certified</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50">
              <img
                data-strk-img-id="hero-machine-img-4b9e1d"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT Double Folding Machine"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-xl">
              <p className="text-amber-500 font-bold text-2xl">25+</p>
              <p className="text-slate-400 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
