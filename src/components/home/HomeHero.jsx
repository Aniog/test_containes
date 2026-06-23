import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ShieldCheck, ClipboardCheck, Ship } from 'lucide-react';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 mb-5">
              B2B sourcing services
            </span>
            <h1 id="home-hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="home-hero-subtitle" className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              We help overseas buyers find reliable suppliers, verify factories, inspect quality,
              follow production, and coordinate shipping from China — with one transparent point of contact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
              >
                See how it works
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Verified suppliers</p>
                  <p className="text-xs text-slate-500">On-site factory checks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <ClipboardCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">AQL inspections</p>
                  <p className="text-xs text-slate-500">Photo report before shipping</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                  <Ship className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Door-to-door shipping</p>
                  <p className="text-xs text-slate-500">Sea, air, and rail freight</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-200">
                <img
                  alt="China factory production line"
                  className="w-full h-full object-cover"
                  data-strk-img-id="home-hero-img-2c8b4d"
                  data-strk-img="[home-hero-subtitle] [home-hero-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1000"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>

              <div className="hidden md:block absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-xl p-5 shadow-md w-64">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">Live order</p>
                <p className="text-sm font-semibold text-slate-900">Final QC passed</p>
                <p className="text-xs text-slate-500 mt-1">5,000 units · Shenzhen · AQL 2.5</p>
                <div className="mt-3 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[92%]"></div>
                </div>
              </div>

              <div className="hidden md:block absolute -top-5 -right-5 bg-white border border-slate-200 rounded-xl p-4 shadow-md">
                <p className="text-xs text-slate-500">On-site team</p>
                <p className="text-base font-bold text-slate-900">Yiwu · Shenzhen · Foshan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos / countries strip */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs uppercase tracking-wider text-slate-500 text-center mb-3">
            Trusted by buyers and brands in 30+ countries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-semibold text-slate-400">
            <span>United States</span>
            <span>Germany</span>
            <span>United Kingdom</span>
            <span>France</span>
            <span>Australia</span>
            <span>Canada</span>
            <span>Mexico</span>
            <span>Spain</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
