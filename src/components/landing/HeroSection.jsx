import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-24 pb-20 px-4"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-100 rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              🚀 Now in Beta
            </span>
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6"
            >
              Build Better Products,{' '}
              <span className="text-indigo-600">Faster Than Ever</span>
            </h1>
            <p
              id="hero-subheading"
              className="text-lg text-slate-600 mb-8 leading-relaxed"
            >
              The all-in-one platform that helps teams collaborate, ship features,
              and delight customers — without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors shadow-md shadow-indigo-200"
              >
                Get Early Access
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-3.5 rounded-lg transition-colors"
              >
                Learn More
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">No credit card required · Free forever plan</p>
          </div>

          {/* Right: hero image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-100 border border-slate-200">
              <img
                alt="Product dashboard preview"
                data-strk-img-id="hero-product-img-a1b2c3"
                data-strk-img="[hero-subheading] [hero-heading]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
