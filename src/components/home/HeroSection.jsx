import { Link } from 'react-router-dom';
import { ArrowRight, Shield, CheckCircle, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-title] [hero-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative container-custom py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
            <Globe className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-blue-200">Trusted by 500+ Global Buyers</span>
          </div>
          <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
            We help overseas buyers find reliable suppliers, verify factories, inspect quality,
            follow production, and coordinate shipping from China. Reduce risk, save time, and
            source with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg px-8 py-4">
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              See How It Works
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-sm text-blue-100">Verified Suppliers Only</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-sm text-blue-100">Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span className="text-sm text-blue-100">End-to-End Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
