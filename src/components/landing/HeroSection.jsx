import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block bg-indigo-50 text-indigo-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Now in public beta
            </span>
            <h1 id="hero-heading" className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Build products your customers will love
            </h1>
            <p id="hero-subheading" className="text-lg text-slate-600 mb-8 leading-relaxed">
              Streamline your workflow, collaborate with your team, and ship faster than ever before. Join thousands of teams already using our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
              >
                Get started free <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Learn more
              </a>
            </div>
            <p className="mt-5 text-sm text-slate-400">No credit card required · Free 14-day trial</p>
          </div>

          {/* Right: hero image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
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
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-200 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-600 text-sm font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">10,000+ teams</p>
                <p className="text-xs text-slate-500">trust our platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
