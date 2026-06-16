import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, Gauge, Award } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative pt-20 lg:pt-24 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700"
        data-strk-bg-id="hero-bg-7f3a2d"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-navy-900/80" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-brass-500/10 border border-brass-500/20 rounded-full px-4 py-1.5 mb-6">
              <Award className="w-4 h-4 text-brass-400" />
              <span className="text-sm font-medium text-brass-300">
                Industry-Leading Precision
              </span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              Precision Sheet Metal{' '}
              <span className="text-brass-400">Folding Machines</span>
            </h1>

            <p
              id="hero-subtitle"
              className="mt-6 text-lg text-slate-300 max-w-xl mx-auto lg:mx-0"
            >
              Engineered for excellence. Our double folding machines deliver
              unmatched accuracy, durability, and efficiency for professional
              metalworking operations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-brass-500 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-brass-400 transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-slate-400/30 text-white px-7 py-3.5 rounded-lg font-medium hover:bg-white/5 transition-colors"
              >
                Request a Demo
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">25+</p>
                <p className="text-sm text-slate-400 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">500+</p>
                <p className="text-sm text-slate-400 mt-1">Machines Sold</p>
              </div>
              <div>
                <p className="text-2xl lg:text-3xl font-bold text-white">40+</p>
                <p className="text-sm text-slate-400 mt-1">Countries</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                data-strk-img-id="hero-machine-img-4b9e1c"
                data-strk-img="[hero-subtitle] [hero-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="Double folding machine for sheet metal"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">ISO Certified</p>
                <p className="text-xs text-slate-500">Quality Assured</p>
              </div>
            </div>
            {/* Floating badge 2 */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Gauge className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">±0.1mm</p>
                <p className="text-xs text-slate-500">Precision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
