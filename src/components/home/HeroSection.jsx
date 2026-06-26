import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-a1b2c3"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 opacity-20"
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          <h1
            id="hero-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            China Sourcing Agent for Global Buyers
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
          >
            We help you find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping — so you can import from China with confidence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-accent text-white font-semibold rounded-md hover:bg-accent-hover transition-colors text-base"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-base"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-6 md:gap-10">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Search className="w-5 h-5 text-accent" />
              <span>Supplier Sourcing</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Shield className="w-5 h-5 text-accent" />
              <span>Factory Verification</span>
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Truck className="w-5 h-5 text-accent" />
              <span>Shipping Coordination</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
