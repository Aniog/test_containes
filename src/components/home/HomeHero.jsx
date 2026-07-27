import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-light overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-400 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-blue-200 mb-6">
              <CheckCircle className="w-4 h-4" />
              Trusted by 500+ global buyers since 2012
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              China Sourcing Agent for Global Buyers
            </h1>

            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed">
              We find reliable Chinese suppliers, verify factories, inspect quality, follow production,
              and coordinate shipping — so you can source with confidence, without setting foot in China.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-base font-semibold bg-brand-red text-white hover:bg-brand-red-light transition-colors shadow-lg shadow-red-600/25"
              >
                Get a Free Sourcing Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md text-base font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                How It Works
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No hidden fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Dedicated project manager
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                English communication
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-gray-800">
              <img
                alt="China factory quality inspection"
                className="w-full h-full object-cover"
                data-strk-img-id="home-hero-factory-qc-a1b2c3"
                data-strk-img="[hero-img-desc] [hero-img-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg px-5 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">ISO 9001 Certified</p>
                <p className="text-xs text-gray-500">Quality Management</p>
              </div>
            </div>
            <div className="hidden" id="hero-img-title">professional quality control inspection in chinese factory</div>
            <div className="hidden" id="hero-img-desc">inspector checking products on production line</div>
          </div>
        </div>
      </div>
    </section>
  );
}
